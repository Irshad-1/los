import React from 'react'
import NavBar from '../SideBar/NavBar'
import styles from './PanVerify.module.css'
import img1 from '../../assets/img/panCard.png'
import { useNavigate } from 'react-router-dom'

const PanVerify = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavBar />
            <div className={styles.subdiv2}>
                <div className={styles.borderBottom}><img
          src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
          alt="ICICI LOGO"
        /></div>
                <div className={styles.sbd2div2}>
                    <h1>Upload Your Pan card</h1>
                   
                        <img src={img1}/>
                        <br />
                        <button onClick={() => navigate("/panscan") }>Scan Now</button>
                   
                </div>
            </div>
        </div>
    )
}

export default PanVerify