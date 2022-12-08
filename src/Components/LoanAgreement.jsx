import React from "react";
import NavBar from "./NavBar";
import styles from "../assets/css/Terms&condition.module.css";

export const LoanAgreement = () => {
  return (
    <div className={styles.mainDiv}>
      <NavBar />
      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}></div>
        <div className={styles.sbd2div2}>
          <h2>General terms & conditions</h2>
          <form className={styles.fromDiv}>
            <ol>
              <li>
                <p>
                  A Loan Agreement, also known as a term loan, demand loan, or a
                  loan contract, is a contract that documents a financial
                  agreement between two parties, where one is the lender and the
                  other is the borrower.
                </p>
              </li>
              <li>
                <p>
                  This contract specifies the amount of the loan, any interest
                  charges, the repayment plan, and payment dates.<br></br>A
                  written contract gives both the borrower and lender a clear
                  outline of the terms of the loan.
                </p>
              </li>
              <li>
                <p>
                  If the borrower dies before paying off the loan, authorities
                  will use their assets to pay the remainder of the debt.
                  <br></br>
                  If there is a co-signer, the responsibility for the debt falls
                  to them.
                </p>
              </li>
              <li>
                <p>
                  The borrower may secure the loan with collateral such as a
                  vehicle, equipment, or jewellery.<br></br>
                  In this case, the lender may seize the collateral if the
                  borrower cannot repay the full loan amount.<br></br>
                  The lender may also require the borrower to obtain insurance
                  if using the loan to buy a vehicle.
                </p>
              </li>
              <li>
                <p>
                  The borrower repays the entire loan amount at once (either by
                  a specific date or upon notice to repay).
                </p>
              </li>
            </ol>
            <button type="submit" className="button">
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
