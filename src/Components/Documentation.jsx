import React, {useContext} from 'react'
import NavBar from './NavBar'
import styles from '../assets/css/Documentation.module.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthcontextProvider.js';

const Documentation = () => {
  const navigate = useNavigate();
  const {
    id
  } = useContext(AuthContext);
  return (
    <div className={styles.mainDiv} >
      <NavBar />
      <div className={styles.subdiv2}>
        <div className={styles.borderBottom}><img
          src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
          alt="ICICI LOGO"
        /></div>
        <div className={styles.sbd2div2}>
          <h2>Let us get to know you
            more by completing
            the next steps:</h2>
          <div className={styles.sd2mainDiv}>
            <div className={styles.smdSubDiv} onClick={() => navigate("/panverify")}>
              <span><h1>1</h1></span>
              <h2>Scan your ID</h2>
              {
                id  
              }

            </div>
            <div className={styles.smdSubDiv} onClick={() => navigate("/uploadselfie")}>
              <span> <h1>2</h1></span>
              <h2>Take your selfie</h2>
            </div>
            <div className={styles.smdSubDiv} onClick={() => navigate("/userDetails")}>
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