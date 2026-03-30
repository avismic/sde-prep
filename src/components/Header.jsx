import React from "react";
import ProgressBar from "./ProgressBar";
import styles from "./Header.module.css";

function Header({ logout, progress }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerRow}>
        <h1>SDE Prep Checklist🧑‍💻</h1>

        <button className={styles.logout_button} onClick={logout}>
          Logout
        </button>
      </div>

      <ProgressBar value={progress} />
    </div>
  );
}

export default Header;
