require("dotenv").config();
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL ✅");
  }
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Bearer TOKEN

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = decoded;
    next();
  });
};

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Sign Up Route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const bcrypt = require("bcrypt");
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(query, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ message: "User already exists or DB error" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = "SELECT * FROM users WHERE email = ?";

  db.query(query, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Server error" });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = results[0];

    const bcrypt = require("bcrypt");
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { email: user.email },
      "secretkey", // we will move this to .env later
      { expiresIn: "1d" },
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  });
});

app.post("/save-progress", verifyToken, (req, res) => {
  const { topic, question, done } = req.body;
  const userEmail = req.user.email;
  if (!topic || !question) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const query = `
        INSERT INTO user_progress (user_email, topic, question, done)
        VALUES (?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE done = ?
    `;

  db.query(query, [userEmail, topic, question, done, done], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "DB error" });
    }
    res.json({ message: "Progress saved" });
  });
});

app.get("/get-progress", verifyToken, (req, res) => {
  const userEmail = req.user.email;

  const query = "SELECT * FROM user_progress WHERE user_email = ?";

  db.query(query, [userEmail], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "DB error" });
    }
    res.json(results);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
