import React from 'react'
import NavBar from './NavBar'
import styles from '../assets/css/UserVerification.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

const UserVerification = () => {
  const navigate = useNavigate();
  const [visi, setVisi] = React.useState(true)

  const handleSubmit = () => {
    setVisi(false)
  }

  const initialValues = {
    mobileNumber: "",
    otp:""
  }
  
  return (
    <div className={styles.maindiv} >

      <NavBar />

      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}></div>
        {visi ?
          <div className={styles.sbd2div2}>
            <h2>Tell us about your basic details and loan requirements</h2>
            <h3>May we know your mobile number?</h3>
            <Formik
              initialValues={initialValues}
            // validationSchema={validationSchema}
            // onSubmit={handleSubmit}
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
                  <Form
                    className="FormDiv"
                  >
                    <Field
                      type="number"
                      name='mobileNumber'
                      placeholder='Enter Mobile Number'
                      className={styles.inputTag}
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                      }}
                      value={values.mobileNumber}
                    />
                    <ErrorMessage name='mobileNumber' />
                    {/* component={TextError} /> */}
                    <br />
                    <br />
                    <button
                      onClick={ handleSubmit }
                      type='submit'
                      className="button"

                    >
                      CONTINUE
                    </button>

                  </Form>
                )
              }}
            </Formik>

          </div> :
          <div className={styles.sbd2div2}>
            <h2>Tell us about your basic details and loan requirements</h2>
            <h3>Please Enter your OTP?</h3>
            <Formik
              initialValues={initialValues}
            // validationSchema={validationSchema}
            // onSubmit={handleSubmit}
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
                  <Form
                    className="FormDiv"
                  >
                    <Field
                      type="number"
                      name='otp'
                      placeholder='Enter OTP'
                      className={styles.inputTag}
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6)
                      }}
                      value={values.otp}
                    />
                    <ErrorMessage name='mobileNumber' />
                    {/* component={TextError} /> */}
                    <br />
                    <br />
                    <button
                      onClick={() => navigate("/terms&condition")}
                      type='submit'
                      className="button"

                    >
                      PROCEED
                    </button>

                  </Form>
                )
              }}
            </Formik>
          </div>}

        <div>

        </div>
      </div>
    </div>
  );
};

export default UserVerification;
