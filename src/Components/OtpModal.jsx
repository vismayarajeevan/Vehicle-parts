import React, { useState } from 'react'
import {  Form, Modal, Spinner } from 'react-bootstrap'
import SubmitButtons from '../reusablecomponents/SubmitButtons'
import OtpInput from 'react-otp-input';
import { otpApi } from '../services/allAPI';

import { showToast } from "../reusablecomponents/Toast";



const OtpModal = ({ showOtpModal, setShowOtpModal, enteredEmail,handleLoginClick }) => {

  // state to hold otp
    const [otp, setOtp] = useState('');
   
    // state to hold error messages
    const [error, setError] = useState("");

    // state for spinner
    const [isLoading,setIsLoading]=useState(false)

    const handleOtpChange = (value) => {
      // Validate that only numbers are entered
      if (!/^\d*$/.test(value)) {
        setError("OTP must contain only numbers.");
        return;
      }
  
      // Set OTP value if valid
      setOtp(value);
  
      // Check length validation
      if (value.length === 6) {
        setError(""); // Clear error if OTP is valid
      } else {
        setError("OTP must be 6 digits.");
      }
    };

  


    const handleOtp = async (e) => {
      e.preventDefault(); // Corrected function call
      console.log("otp",otp)
    
      // Validate OTP before making API call
      if (otp.length !== 6) {
        setError("OTP must be 6 digits.");
        return;
      }

        // Check if OTP contains only numbers and has 6 digits
   else if (!/^\d{6}$/.test(otp)) {
    setError("OTP must be 6 digits and contain only numbers.");
    return;
  }else{

    setIsLoading(true)
    const data = { email: enteredEmail, otp }
    console.log(data);
    
  
    try {
      const result = await otpApi(data);
      console.log("Entered OTP is", result);
  
      if (result.status === 200) {
        showToast(`${result.data.message}`, "success", {
          position: "top-right",
          autoClose: 3000,
        });
        
        
        
        handleLoginClick()
       
      } else {
        showToast(`${result.data.message}`, "error", {
                    position: "top-right",
                    autoClose: 3000,
                  });
      }
    } catch (error) {
      const errorMessage =
               error.response?.data?.message ||
               error.message ||
               "Something went wrong!";
     
             showToast(errorMessage, "error", {
               position: "top-right",
               autoClose: 3000,
             });
    }
    setIsLoading(false)

  }

      
      
      
      
    };
    
  return (
    <>
      <Modal centered show={showOtpModal} onHide={() => setShowOtpModal(false)}>
      <Modal.Header closeButton style={{ borderBottom: 'none' }}>
        <Modal.Title className='w-100 text-center'>Enter OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body className="ps-5 pe-5">
         <div >
              <p>An OTP has been sent to the provided email address 
      <a href="" className='ms-1'>{enteredEmail}. </a> </p>
      <p>Please enter the OTP to proceed.</p>
      </div>
      <div className='mt-5 mb-5'>
        <OtpInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: "50px", // Increase the width here
                height: "50px", // Optional: Adjust the height
                fontSize: "1.2rem", // Optional: Adjust font size
                textAlign: "center", // Center align text
                margin: "0 5px", // Add space between inputs
                border: "1px solid #ccc", // Optional: Add border styling
                borderRadius: "4px", // Optional: Add rounded corners
              }}
            />
          )}
        />
        {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
      </div>
     
      <div>
          <Form>
  
          </Form>
      </div>
              <SubmitButtons onClick={handleOtp}>
              {isLoading ? (
                  <>
                    <Spinner
                      animation="border"
                      role="status"
                      size="sm"
                      className="me-2"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    Verifying...
                  </>
                ) :" Submit "
                }
              </SubmitButtons>
         
      </Modal.Body>
      
    </Modal>
  
    </>
  )
}

export default OtpModal