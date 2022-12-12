import React, { useEffect, useState, useRef } from "react";
import NavBar from "../SideBar/NavBar";
import styles from "./UserVerification.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import TextError from "../TextError/TextError.jsx";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import OtpInput from "react18-input-otp";
import { hover } from "@testing-library/user-event/dist/hover";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  
  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };


  // const validationSchema = Yup.object({
  //   otp: Yup.number()
  //     .min(6)
  //     .required("Required"),
  //   term: Yup.boolean()
  //     .oneOf([true], "You must accept the terms and conditions")

  // });

  // const handleSubmit = (values, payload) => {
  //   navigate("/documentation")
  // };

  // const initialValues = {
  //   otp: "",
  //   term: false
  // };

  const [otp, setOtp] = useState("");
  const [prevOtp, setPrevOtp] = useState();
  const otpRef = useRef(null);
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
    setPrevOtp(otp);
  };
  useEffect(() => {
    if (otp?.length < prevOtp?.length)
      otpRef.current.focusInput(otp.length - 1);
  }, [otp]);

  return (
    <div className={styles.maindiv}>
      <NavBar />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}><img
          src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
          alt="ICICI LOGO"
        /></div>

        <div className={styles.sbd2div2}>
          <h2>Tell us about your basic details and loan requirements</h2>
          <h3>Please Enter your OTP?</h3>
          <div>
            <OtpInput
              ref={otpRef}
              value={otp}
              inputStyle={{
                width: "50px",
                height: "50px",
                border: "1px solid orange",
                boxShadow: "5px 5px 5px #ae9d9d",
                borderRadius: "5px",
                border : "1px solid red"
              }}
              className={styles.inputStyleAgain}
              onChange={(e) => {
                if (!/[0-9]/.test(e) && e != "") {
                  return;
                }
                handleChange(e);
              }}
              numInputs={6}
              separator={<span style={{ width: "20px" }}></span>}
            />
            <br></br>
            <label className={styles.label}>
             <input type="checkbox" defaultChecked={false} onChange={() => setCheck(!check)} />
              By checking this box, I agree to receive promotional &
              marketing content from DEMO Bank <br></br>
              <a onClick={onOpenModal}>view details</a>
            </label>
            <br></br>
            <br></br>
            <br></br>
            
            <button
              onClick={(e) => {
                e.preventDefault();
                otpRef.current.focusInput(1);
               navigate("/documentation")
              }}
              disabled={ otp.length < 6 || check ==false }
               
            >
              Submit
            </button>
          </div>

          <Modal open={open} onClose={onCloseModal}>
            <h2>General terms & conditions</h2>
            <ol>
              <li><p>A Loan Agreement, also known as a term loan, demand loan, or a loan contract, is a contract that documents a financial agreement between two parties, where one is the lender and the other is the borrower.</p></li>
              <li>
                <p>
                  This contract specifies the amount of the loan, any interest charges, the repayment plan, and payment dates.<br></br>
                  A written contract gives both the borrower and lender a clear outline of the terms of the loan.
                </p></li>
              <li>
                <p>
                  If the borrower dies before paying off the loan, authorities will use their assets to pay the remainder of the debt.<br></br>
                  If there is a co-signer, the responsibility for the debt falls to them.
                </p></li><li>
                <p>
                  The borrower may secure the loan with collateral such as a vehicle, equipment, or jewellery.<br></br>
                  In this case, the lender may seize the collateral if the borrower cannot repay the full loan amount.<br></br>
                  The lender may also require the borrower to obtain insurance if using the loan to buy a vehicle.
                </p></li>
              <li>
                <p>
                  The borrower repays the entire loan amount at once (either by a specific date or upon notice to repay).</p></li>
            </ol>
            <h2>General</h2>
            <ol>
              <li>
                <p>This contract specifies the amount of the loan, any interest charges, the repayment plan, and payment dates.<br></br>
                  A written contract gives both the borrower and lender a clear outline of the terms of the loan.</p></li>
              <li>
                <p>
                  The borrower may secure the loan with collateral such as a vehicle, equipment, or jewellery.<br></br>
                  In this case, the lender may seize the collateral if the borrower cannot repay the full loan amount.<br></br>
                  The lender may also require the borrower to obtain insurance if using the loan to buy a vehicle.
                </p>
              </li>

            </ol>
          </Modal>
        </div>
      </div>

    </div>
  );
};

export default OtpVerification;
