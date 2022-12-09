import React from "react";
import NavBar from "../SideBar/NavBar";
import styles from "./UserDetails.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export const LoanAvailment = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.maindiv}>
      <NavBar />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}><img
          src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
          alt="ICICI LOGO"
        /></div>
        <div className={styles.loanAvail}>
          <h3>Tenor</h3>
          <div>
            <div>6 Months</div>
            <div>12 Months</div>
            <div>18 Months</div>
          </div>
          <h3>Loan Amount</h3>
          <div>
            <div>15K</div>
            <div>30K</div>
            <div>45K</div>
            <div>60K</div>
          </div>
          <div>
            <h2>₹ 30,000.00</h2>
            <div>
              <div>Installment</div>
              <div>₹ 1,400.33</div>
            </div>
            <div>
              <div>Interest Date</div>
              <div>1.89%</div>
            </div>
          </div>
          <div>
            <label>Purpose</label>
            <select>
              <option value="">Purchase of household appliance</option>
            </select>
          </div>
          <p>
            Your loan proceeds will be credited to the XXXIIIX XIIXIX savings
            account.
          </p>
          <button>Avail Later</button>
          <button
            onClick={() => {
              navigate("/loanSummary");
            }}
          >
            Avail Now
          </button>
        </div>
      </div>
    </div>
  );
};
