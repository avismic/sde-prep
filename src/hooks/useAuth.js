import { useState } from "react";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

      const data = await res.json();

      if (res.ok) {
        if (authMode === "login") {
          // ✅ Only login stores token
          localStorage.setItem("token", data.token);
          localStorage.setItem("userEmail", authData.email);
          setIsLoggedIn(true);
        } else {
          // ✅ Signup flow
          alert("Account created successfully! Please login.");
          navigate("/login");
        }
      } else {
        setError(data.message);
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
  };
}
