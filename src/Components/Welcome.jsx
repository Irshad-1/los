import React from "react";
import NavBar from "./NavBar";
import styles from "../assets/css/UserDetails.module.css";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.maindiv}>
      <NavBar />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}></div>
        <div className={styles.details}>
          <h1>Welcome to DEMO BANK</h1>
          <h3>
            Thank you for accepting the offer. Avail of you loan now. but first
            you need to set your password and passcode.
          </h3>
          <button
            onClick={() => {
              navigate("/setPassword");
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};
