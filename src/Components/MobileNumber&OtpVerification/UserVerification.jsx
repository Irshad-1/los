import React from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./UserVerification.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextError from "../TextError/TextError";

const UserVerification = () => {
  const navigate = useNavigate();
  const [visi, setVisi] = React.useState(true);

  const validationSchema = Yup.object({
    mobileNumber: Yup.number()
      .min(1000000000, "Mobile number must be 10 digit")
      .required("Required"),
  });

  const handleSubmit = (values, payload) => {
    navigate("/otpverification");
  };

  const initialValues = {
    mobileNumber: "",
  };

  return (
    <div className={styles.maindiv}>
      <Sidebar stepCompleted={1} />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}>
          <img
            src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
            alt="ICICI LOGO"
          />
        </div>
        <div className={styles.sbd2div2}>
          <h2>Tell us about your basic details and loan requirements</h2>
          <h3>May we know your mobile number?</h3>
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
                  <br />
                  <ErrorMessage name="mobileNumber" component={TextError} />

                  <br />
                  <br />
                  <button type="submit" className="button">
                    CONTINUE
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

export default UserVerification;
