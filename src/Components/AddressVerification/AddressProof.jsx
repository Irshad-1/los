import React from 'react'
import styles from './AddressProof.module.css'
import NavBar from '../SideBar/NavBar'
import img1 from '../../assets/img/Aadhar.png';
import img2 from '../../assets/img/driving licence.png';
import img3 from '../../assets/img/passport.png';
import img4 from '../../assets/img/NREGA.png';
import { useNavigate } from 'react-router-dom';

const AddressProof = () => {
    const navigate = useNavigate();
    const [userAddId, setUserAddId] = React.useState(null)
  return (
    <div>
         <NavBar />
            <div className={styles.subdiv2}>
                <div className={styles.borderBottom}><img
          src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
          alt="ICICI LOGO"
        /></div>
                <div className={styles.sbd2div2}>
                    <h2>Choose Address Proof</h2>
                    <div className={styles.sd2mainDiv}>
                        <div>
                          <img src={img1} style={{width:"150px", marginLeft:"40px", height:"120px"}} />
                          <input type="radio" className={styles.checkbox} value='userAddId' onChange={()=>setUserAddId("pan")} />
                        </div>
                        <div>
                            <img src={img2}  style={{width:"190px", marginLeft:"-140px", height:"170px", marginTop:"0px", paddingTop:"25px"}}/>
                            <input type="radio" className={styles.checkbox} value='userAddId' onChange={()=>setUserAddId("pan")} />
                        </div>
                        <div>
                            <img src={img3} style={{ marginTop:"0px"}}/>
                            <input type="radio" className={styles.checkbox} value='userAddId' onChange={()=>setUserAddId("pan")} />
                        </div>
                        <div>
                            <img src={img4} style={{width:"160px", marginLeft:"-120px", height:"100px", marginTop:"-15px", paddingTop:"25px"}}/>
                            <input type="radio" className={styles.checkbox} value='userAddId' onChange={()=>setUserAddId("pan")} />
                        </div>
                    </div>
                </div>
                <button onClick={() => navigate("/addressproofscan")}>Upload Now</button>
                </div>
    </div>
  )
}

export default AddressProof