import React from "react";
import NavBar from "../SideBar/NavBar";
import styles from "./UserDetails.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState(false);
  const initialValues = {
    mobileNumber: "",
    password: "",
  };
  return (
    <div className={styles.maindiv}>
      <NavBar />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}><img
          src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
          alt="ICICI LOGO"
        /></div>
        <div className={styles.details}>
          <h1>Welcome to DEMO BANK</h1>
          <h3>
            Thank you for accepting the offer. Avail of you loan now. but first
            you need to set your password and passcode.
          </h3>
          <div className={styles.passwordDiv}>
            <Formik initialValues={initialValues}>
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                setFieldValue,
                setFieldTouched,
                submitForm,
              }) => {
                return (
                  <Form>
                    <div >
                      <h3 className={styles.label}>Mobile Number</h3>
                      <Field
                        type="number"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        className={styles.inputTag}
                      />
                    </div>
                    <ErrorMessage name="mobileNumber" />
                    <div style={{ display: "block" }}>
                      <h3 className={styles.label}>Password</h3>
                      <Field
                        type={state ? "text" : "password"}
                        name="password"
                        placeholder="Enter Password"
                        className={styles.inputTag}
                      />
                    </div>
                    <ErrorMessage name="password" />
                  </Form>
                );
              }}
            </Formik>
          </div>
          <button
            onClick={() => {
              navigate("/loanAvailment");
            }}
            style={{marginLeft:"-220px"}}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
