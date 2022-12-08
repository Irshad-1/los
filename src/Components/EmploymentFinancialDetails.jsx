import React from "react";
import NavBar from "./NavBar";
import styles from "../assets/css/UserDetails.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export const EmploymentFinancialDetails = () => {
  const navigate = useNavigate();
  const initialValues = {
    purposeForOpeningAccount: "",
    sourceOfFunds: "",
    monthlyIncome: "",
    salaryCreditDate: "",
    employmentType: "",
    employmentStatus: "",
    natureOfWork: "",
    employerName: "",
    employerAddress: "",
    industryType: "",
    position: "",
  };
  return (
    <div className={styles.maindiv}>
      <NavBar />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}></div>
        <div className={styles.formDiv}>
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
                <Form className="container">
                  <h3>Tell us about your Financial Details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>
                        Purpose for Opening Account
                      </h3>
                      <Field
                        as="select"
                        name="purposeForOpeningAccount"
                        className={styles.inputTag}
                      >
                        <option value="">Demo Text</option>
                      </Field>
                      <ErrorMessage name="purposeForOpeningAccount" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Source of Funds</h3>
                      <Field
                        as="select"
                        name="sourceOfFunds"
                        className={styles.inputTag}
                      >
                        <option value="">Employment</option>
                      </Field>
                      <ErrorMessage name="sourceOfFunds" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Monthly Income</h3>
                      <Field
                        type="number"
                        name="monthlyIncome"
                        placeholder="Enter Monthly Income"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="monthlyIncome" />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>
                        Choose Salary Credit Date
                      </h3>
                      <Field as="select" name="salaryCreditDate">
                        <option value="">Within 5th</option>
                      </Field>
                      <ErrorMessage name="salaryCreditDate" />
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                  <h3>Employment Details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>Employment Type</h3>
                      <Field
                        as="select"
                        name="employmentType"
                        className={styles.inputTag}
                      >
                        <option value="">Employed</option>
                      </Field>
                      <ErrorMessage name="employmentType" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Employment Status</h3>
                      <Field
                        as="select"
                        name="employmentStatus"
                        className={styles.inputTag}
                      >
                        <option value="">Employed</option>
                      </Field>
                      <ErrorMessage name="employmentStatus" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Nature Of Work</h3>
                      <Field
                        as="select"
                        name="natureOfWork"
                        className={styles.inputTag}
                      >
                        <option value="">Agriculture, Fishing</option>
                      </Field>
                      <ErrorMessage name="natureOfWork" />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>Employer Name</h3>
                      <Field
                        type="text"
                        name="employerName"
                        placeholder="Enter Employer Name"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="employerName" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Employer Address</h3>
                      <Field
                        type="text"
                        name="employerAddress"
                        placeholder="Enter Employer Address"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="employerAddress" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Industry Type</h3>
                      <Field
                        as="select"
                        name="industryType"
                        className={styles.inputTag}
                      >
                        <option value="">Aviation / Airline</option>
                      </Field>
                      <ErrorMessage name="industryType" />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>Position</h3>
                      <Field
                        as="select"
                        name="position"
                        className={styles.inputTag}
                      >
                        <option value="">Demo</option>
                      </Field>
                      <ErrorMessage name="position" />
                    </div>
                  </div>

                  <button className={styles.backButton}>Cancel</button>
                  <button
                    type="submit"
                    className="button"
                    onClick={() => navigate("/loanDetails")}
                  >
                    Continue
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
