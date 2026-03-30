import React from "react";
import styles from "./AuthForm.module.css";

function AuthForm({
  authMode,
  setAuthMode,
  authData,
  setAuthData,
  handleAuth,
  loading,
  error,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{authMode === "login" ? "Login" : "Sign Up"}</h2>

        {authMode === "signup" && (
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            value={authData.name}
            onChange={(e) => setAuthData({ ...authData, name: e.target.value })}
          />
        )}

        <input
        className={styles.input}
          type="email"
          placeholder="Email"
          value={authData.email}
          onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
        />

        <input
        className={styles.input}
          type="password"
          placeholder="Password"
          value={authData.password}
          onChange={(e) =>
            setAuthData({ ...authData, password: e.target.value })
          }
        />

        <button className={styles.button} onClick={handleAuth} disabled={loading}>
          {loading
            ? "Please wait..."
            : authMode === "login"
              ? "Login"
              : "Sign Up"}
        </button>
        {error && <p className={styles.error}>{error}</p>}

        <p
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
        >
          {authMode === "login"
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
