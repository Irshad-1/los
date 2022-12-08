import React from 'react'
import NavBar from './NavBar'
import styles from '../assets/css/Documentation.module.css'
import { useNavigate } from 'react-router-dom';

const Documentation = () => {
     const navigate = useNavigate();
  return (
    <div className={styles.mainDiv} >
      <NavBar />
      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}></div>
        <div className={styles.sbd2div2}>
          <h2>Let us get to know you
            more by completing
            the next steps:</h2>
          <div className={styles.sd2mainDiv}>
            <div className={styles.smdSubDiv} onClick={()=> navigate("/panverify")}>
             <span><h1>1</h1></span> 
             <h2>Scan your ID</h2>
            </div>
            <div className={styles.smdSubDiv}>
             <span> <h1>2</h1></span>
             <h2>Take your selfie</h2>
            </div>
            <div className={styles.smdSubDiv}>
              <span><h1>3</h1></span>
              <h2>Fillout details</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation