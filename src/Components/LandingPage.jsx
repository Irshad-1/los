import React from 'react'
import "../App.css"
import ic6 from "../assets/img/ic6.png"
import ic4 from "../assets/img/ic4.png"
import HeroSlider from './Heroslider'
import styles from '../assets/css/LandingPage.module.css'
import { Footer } from './Footer'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
      const navigate = useNavigate();

    return (
        <div className={styles.lndPage}>
            <div className={styles.lndNav} >
                <h1 style={{ paddingTop: "18px", marginLeft: "50px" }}>DEMO BANK</h1>
                <img src={ic6} style={{ height: "40px", float: "right", marginTop: "-50px", marginRight: "50px" }} />
            </div>
            <div className={styles.lndSubDiv1}>
                <img src={ic4} className={styles.img1} />
            </div>
            <div className={styles.lndSubDiv2}>
                <div className={styles.lsd2div1}>
                    <img src='https://loans.icicibank.com/loans/home-loan/assets/Images/landing_page/discount%20(1).svg' />
                    <h4>Login</h4>
                    <p>DEMO Bank offers a pre-approved loan for select<br></br> customer. Check your offer and apply.</p>
                    <button>Existing Customer</button>
                </div>
                <div className={styles.lsd2div1}>
                    <img src='https://loans.icicibank.com/loans/home-loan/assets/Images/landing_page/Group%20641.svg' />
                    <h4>New Application</h4>
                    <p>Complete your Home Loan application in just a few<br></br> minutes.</p>
                    <button onClick={()=> navigate("/userverification")}>New Customer</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage