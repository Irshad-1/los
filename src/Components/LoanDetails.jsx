import React from "react";
import NavBar from "./NavBar";
import styles from "../assets/css/UserDetails.module.css";

export const LoanDetails = () => {
  return (
    <div className={styles.maindiv}>
      <NavBar />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}></div>
        <div className={styles.details}>
          <h1>Congratulations!</h1>
          <h3>
            Your personal loan has been approved. See approved terms below.
          </h3>
          <div className={styles.card}>
            <h3>Personal Loan Details</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
