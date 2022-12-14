import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./UserDetails.module.css";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={3} />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}>
          <img
            src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
            alt="ICICI LOGO"
          />
        </div>
        <div className={styles.details} style={{ textAlign: "center" }}>
          <h1>Welcome to DEMO BANK</h1>
          <h3>
            Thank you for accepting the offer. Avail of you loan<br></br> now.
            but first you need to set your<br></br> password and passcode.
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
