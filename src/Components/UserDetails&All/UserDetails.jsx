import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./UserDetails.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: new Date(),
    placeOfBirth: "",
    nationality: "",
    incomeProofType: "",
    incomeProofNumber: "",
    addressProofType: "",
    addressProofNumber: "",
    gender: "",
    mobileNumber: "",
    emailId: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    city: "",
    place: "",
    zipCode: "",
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
                  <h3>Tell us about your basic details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>First Name</h3>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="firstName" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Middle Name</h3>
                      <Field
                        type="text"
                        name="middleName"
                        placeholder="Enter Middle Name"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="middleName" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Last Name</h3>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>Date Of Birth</h3>
                      <Field type="date" name="dateOfBirth" />
                      <ErrorMessage name="dateOfBirth" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Place Of Birth</h3>
                      <Field
                        type="text"
                        name="placeOfBirth"
                        placeholder="Enter Place Of Birth"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="placeOfBirth" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Nationality</h3>
                      <Field
                        type="text"
                        name="nationality"
                        placeholder="Enter Nationality"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="nationality" />
                    </div>
                  </div>
                  <h3>Other Personal Details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>Income Proof Type</h3>
                      <Field
                        type="text"
                        name="incomeProofType"
                        placeholder="Enter Income Proof Type"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="incomeProofType" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Income Proof Number</h3>
                      <Field
                        type="text"
                        name="incomeProofNumber"
                        placeholder="Enter Income Proof Number"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="incomeProofNumber" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Address Proof Type</h3>
                      <Field
                        type="text"
                        name="addressProofType"
                        placeholder="Enter Address Proof Type"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="addressProofType" />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>Address Proof Number</h3>
                      <Field
                        type="text"
                        name="addressProofNumber"
                        placeholder="Enter Address Proof Number"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="addressProofNumber" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Gender</h3>
                      <Field
                        type="text"
                        name="gender"
                        placeholder="Enter Gender"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="gender" />
                    </div>
                    <div></div>
                  </div>
                  <h3>Contact Details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>Mobile Number</h3>
                      <Field
                        type="number"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="mobileNumber" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Email ID</h3>
                      <Field
                        type="email"
                        name="emailId"
                        placeholder="Enter Email ID"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="emailId" />
                    </div>
                    <div></div>
                  </div>
                  <h3>Address Details</h3>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>Address Line 1</h3>
                      <Field
                        type="text"
                        name="addressLine1"
                        placeholder="Enter Address Line 1"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="addressLine1" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Address Line 2</h3>
                      <Field
                        type="text"
                        name="addressLine2"
                        placeholder="Enter Address Line 2"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="addressLine2" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Address Line 3</h3>
                      <Field
                        type="text"
                        name="addressLine3"
                        placeholder="Enter Address Line 3"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="addressLine3" />
                    </div>
                  </div>
                  <div className={styles.marginBottom}>
                    <div>
                      <h3 className={styles.label}>City</h3>
                      <Field
                        type="text"
                        name="city"
                        placeholder="Enter City"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="city" />
                    </div>
                    <div>
                      <h3 className={styles.label}>Place</h3>
                      <Field
                        type="text"
                        name="place"
                        placeholder="Enter Place"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="place" />
                    </div>
                    <div>
                      <h3 className={styles.label}>ZIP Code</h3>
                      <Field
                        type="text"
                        name="zipCode"
                        placeholder="Enter ZIP Code"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="zipCode" />
                    </div>
                  </div>
                  <button className={styles.backButton}>Cancel</button>
                  <button
                    type="submit"
                    className="button"
                    onClick={() => navigate("/employmentFinancialDetails")}
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

export default UserDetails;
