import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "../MobileNumber&OtpVerification/UserVerification.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const Authentication = () => {
  const navigate = useNavigate();
  const [visi, setVisi] = React.useState(true);

  const validationSchema = Yup.object({
    otp: Yup.number().min(6).required("Required"),
  });

  const handleSubmit = (values, payload) => {
    navigate("/congratulations");
  };

  const initialValues = {
    otp: "",
  };

  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={6} />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}>
          <img
            src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
            alt="ICICI LOGO"
          />
        </div>

        <div className={styles.sbd2div2}>
          <h2>Enter the OTP we send to +91 XXX XXX X298</h2>
          <h3>OTP</h3>
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
                  <ErrorMessage name="otp" />

                  <br />
                  <br />
                  <button type="submit" className="button">
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
