import React from "react";
import NavBar from "../SideBar/NavBar";
import styles from "./UserVerification.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import TextError from "../TextError/TextError.jsx";
import Modal from 'react-modal';

const OtpVerification = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    otp: Yup.number()
      .min(6)
      .required("Required"),
    term: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")

  });

  const handleSubmit = (values, payload) => {
    navigate("/documentation")
  };

  const initialValues = {
    otp: "",
    term:false
  };

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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
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
                <Form className="FormDiv">
                  <Field
                    type="number"
                    name="otp"
                    placeholder="Enter OTP"
                    className={styles.inputTag}
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 6);
                    }}
                    value={values.otp}
                  />
                  <br></br>

                  <ErrorMessage name="otp" component={TextError} />


                  <br />
                  <br />
                  <label className={styles.label}>
                    <Field type="checkbox" name='term'/>
                    By checking this box, I agree to receive promotional & marketing content from DEMO Bank <br></br>
                    <a href="/terms&condition"  target="_blank">view details</a>
                  </label>
                  <br></br>
                  <ErrorMessage name="term" component={TextError} />
                  <br></br>
                  <br></br>
                  <br></br>
                 
                  <button
                    type="submit"
                    className="button"
                  >
                    PROCEED
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default OtpVerification;
