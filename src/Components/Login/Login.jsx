import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./Login.module.css";
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
      <Sidebar />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}>
          <img
            src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
            alt="ICICI LOGO"
          />
        </div>
        <div className={styles.details}>
          <div>
            <h1>Welcome to DEMO BANK</h1>
            <h3>
              Thank you for accepting the offer. Avail of you loan now. but
              first you need to set your password and passcode.
            </h3>
          </div>
          <div className="passwordDiv inputCard">
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
                    <div>
                      <h3 className="label">Mobile Number</h3>
                      <Field
                        type="number"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        className={styles.inputTag}
                      />
                    </div>
                    <ErrorMessage name="mobileNumber" />
                    <div style={{ display: "block" }}>
                      <h3 className="label">Password</h3>
                      <Field
                        type={state ? "text" : "password"}
                        name="password"
                        placeholder="Enter Password"
                        className={styles.inputTag}
                      />
                    </div>
                    <ErrorMessage name="password" />
                    <button
                      onClick={() => {
                        navigate("/loanAvailment");
                      }}
                    >
                      Login
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
