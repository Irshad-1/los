import React from "react";
import NavBar from "./NavBar";
import styles from "../assets/css/UserDetails.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export const SetPassword = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const [state, setState] = React.useState({
    password: false,
    confirmPassword: false,
  });
  const navigate = useNavigate();
  return (
    <div className={styles.maindiv}>
      <NavBar />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}><img
          src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
          alt="ICICI LOGO"
        /></div>
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
                  <h3>Set Password</h3>
                  <div>
                    <Field
                      type={state.password ? "text" : "password"}
                      name="password"
                      placeholder="Enter Password"
                      className={styles.inputTag}
                    />
                    <span>
                      <button
                        onClick={() => {
                          setState((prev) => {
                            if (prev.password) {
                              return { ...prev, password: false };
                            } else {
                              return { ...prev, password: true };
                            }
                          });
                        }}
                      >
                        {!state.password ? "Show" : "Hide"}
                      </button>
                    </span>
                  </div>
                  <ErrorMessage name="password" />
                  <div>
                    <Field
                      type={state.confirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Enter Confirm Password"
                      className={styles.inputTag}
                    />
                    <span>
                      <button
                        onClick={() => {
                          setState((prev) => {
                            if (prev.confirmPassword) {
                              return { ...prev, confirmPassword: false };
                            } else {
                              return { ...prev, confirmPassword: true };
                            }
                          });
                        }}
                      >
                        {!state.confirmPassword ? "Show" : "Hide"}
                      </button>
                    </span>
                  </div>
                  <ErrorMessage name="confirmPassword" />
                  <button
                    type="submit"
                    className="button"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    CONTINUE
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};
