import React from 'react'
import NavBar from './NavBar'
import styles from '../assets/css/PanVerify.module.css'
import img1 from '../assets/img/panCard.png'
import { useNavigate } from 'react-router-dom'

const PanVerify = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavBar />
            <div className={styles.subdiv2}>
                <div className={styles.borderBottom}></div>
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