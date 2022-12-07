import React from "react";
import NavBar from "./NavBar";
import styles from "../assets/css/UserVerification.module.css";
import { Row, Col, Container } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";

const UserVerification = () => {
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
      <NavBar />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}></div>
        <div className={styles.formDiv}>
          <h3>Tell us about your basic details</h3>
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
                  <Row className={styles.marginBottom}>
                    <Col>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="firstName" />
                    </Col>
                    <Col>
                      <Field
                        type="text"
                        name="middleName"
                        placeholder="Enter Middle Name"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="middleName" />
                    </Col>
                    <Col>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        className={styles.inputTag}
                      />
                      <ErrorMessage name="lastName" />
                    </Col>
                  </Row>
                  <Row className={styles.marginBottom}>
                    <Col>
                      <Field type="date" name="dateOfBirth" />
                      <ErrorMessage name="dateOfBirth" />
                    </Col>
                    <Col>
                      <Field
                        type="number"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        className={styles.inputTag}
                        onInput={(e) => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 10);
                        }}
                        value={values.mobileNumber}
                      />
                      <ErrorMessage name="mobileNumber" />
                    </Col>
                    <Col>
                      <Field
                        type="number"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        className={styles.inputTag}
                        onInput={(e) => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 10);
                        }}
                        value={values.mobileNumber}
                      />
                      <ErrorMessage name="mobileNumber" />
                    </Col>
                  </Row>
                  <Row className={styles.marginBottom}>
                    <Col>
                      <Field
                        type="number"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        className={styles.inputTag}
                        onInput={(e) => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 10);
                        }}
                        value={values.mobileNumber}
                      />
                      <ErrorMessage name="mobileNumber" />
                    </Col>
                    <Col>
                      <Field
                        type="number"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        className={styles.inputTag}
                        onInput={(e) => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 10);
                        }}
                        value={values.mobileNumber}
                      />
                      <ErrorMessage name="mobileNumber" />
                    </Col>
                    <Col>
                      <Field
                        type="number"
                        name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        className={styles.inputTag}
                        onInput={(e) => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 10);
                        }}
                        value={values.mobileNumber}
                      />
                      <ErrorMessage name="mobileNumber" />
                    </Col>
                  </Row>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UserVerification;
