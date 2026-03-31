import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loginOrSignup = async (authMode, authData) => {
    setError("");
    setLoading(true);

    try {
      const endpoint = authMode === "login" ? "login" : "signup";

      const res = await fetch(`https://elevenmen.in/api/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
      });

      // ✅ SAFE JSON PARSE
      let data = {};
      try {
        data = await res.json();
      } catch (e) {
        data = {};
      }

      if (res.ok) {
        if (authMode === "login") {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userEmail", authData.email);
          setIsLoggedIn(true);
        } else {
          // ✅ Signup flow (no navigate)
          setSuccess("Account created successfully. Please login.");
          setIsLoggedIn(false); // ensure still logged out
        }
      } else {
        setError(data.message || "Authentication failed");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    loading,
    error,
    loginOrSignup,
    logout,
    success,
  };
}
