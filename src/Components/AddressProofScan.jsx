import React from 'react'
import ImageCapture from 'react-image-data-capture';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/PanScan.module.css';

const AddressProofScan = () => {
    const navigate = useNavigate();
    const [imgSrc, setImgSrc] = React.useState(null);
    const [imgFile, setImgFile] = React.useState(null);
    const onCapture = (imageData) => {
        // read as webP
        setImgSrc(imageData.webP);
        // read as file
        setImgFile(imageData.file);
        // read as blob
        // imageData.blob
    };

    // Use useCallback to avoid unexpected behaviour while rerendering
    const onError = React.useCallback((error) => { console.log(error) }, []);

    // Use useMemo to avoid unexpected behaviour while rerendering
    const config = React.useMemo(() => ({ video: true }), []);
    /*
      { video: true } - Default Camera View
      { video: { facingMode: environment } } - Back Camera
      { video: { facingMode: "user" } } - Front Camera
    */

    // imgFile can be used as a file upload field form submission
    const formData = new FormData();
    formData.append("file", imgFile);
  return (
    <div>
        <NavBar />
            <div className={styles.subdiv2}>
                <div className={styles.borderBottom}></div>
                <div className={styles.sbd2div2}>
                    <div>
                        <h2>Capture Aadhar Card</h2>
                        <ImageCapture
                            onCapture={onCapture}
                            onError={onError}
                            width={400}
                            userMediaConfig={config}
                        />
                    </div>
                    <div>
                        {imgSrc && 
                        <>
                        <h2>Captured Aadhar Card:</h2>
                         <img src={imgSrc} alt="captured-img" />
                         </>
                        }
                   
                    </div>

                </div>
                <button onClick={()=> navigate("/documentation")}>Confirm & Continue</button>
            </div>
    </div>
  )
}

export default AddressProofScan