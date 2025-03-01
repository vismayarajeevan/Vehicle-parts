
import React, { useState, useEffect } from 'react';
import { Form, Modal, Spinner } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import Formfield from '../reusablecomponents/Formfield';
import SubmitButtons from '../reusablecomponents/SubmitButtons';
import { resetPasswordApi } from '../services/allAPI';
import { showToast } from "../reusablecomponents/Toast";


const EnterDetailsModal = ({ showEnterDetailsModal, setShowEnterDetailsModal, showPassword, enteredEmail,handleLoginClick }) => {
  
  const [otp, setOtp] = useState('');

  const [updatePassword, setUpdatePassword] = useState({
    email: enteredEmail, 
    otp: "",
    newPassword: "",
    confirmPassword: "" // Fixed missing field
  });

  console.log("Update Password Data:", updatePassword);


  // Separate error states for OTP, password, and confirm password
  const [otpError, setOtpError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

   // state for spinner
      const [isLoading,setIsLoading]=useState(false)

  useEffect(() => {
    setUpdatePassword((prev) => ({ ...prev, otp }));
  }, [otp]);

  const handleOtpChange = (value) => {
    if (!/^\d{0,6}$/.test(value)) {
      setOtpError("OTP must contain only numbers and be 6 digits.");
      return;
    }

    setOtp(value);

    setOtpError(value.length === 6 ? "" : "OTP must be 6 digits.");
  };

  console.log("OTP:", otp);

  const handlePasswordChange = (e) => {
    setUpdatePassword((prev) => ({
      ...prev,
      newPassword: e.target.value,
    }));
    setPasswordError(""); // Clear error on typing
  };

  const handleConfirmPasswordChange = (e) => {
    setUpdatePassword((prev) => ({
      ...prev,
      confirmPassword: e.target.value,
    }));
    setConfirmPasswordError(""); // Clear error on typing
  };

  const handleupdatePassword = async (e) => {
    e.preventDefault();
    
    let valid = true; // Flag to track validation
   

    if (otp.length !== 6) {
      setOtpError("OTP must be 6 digits.");
      valid= false
    }

    if (!/^\d{6}$/.test(otp)) {
      setOtpError("OTP must be 6 digits and contain only numbers.");
      valid= false
      
    }

    
    // Validate passwords
    if (!updatePassword.newPassword) {
      setPasswordError("Password cannot be empty.");
      valid = false;
    }

    if (!updatePassword.confirmPassword) {
      setConfirmPasswordError("Confirm Password cannot be empty.");
      valid = false;
    }

    if (updatePassword.newPassword !== updatePassword.confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      valid = false;
    }

    if (!valid) return; // Stop execution if validation fails

    setIsLoading(true)

    try {
      const result = await resetPasswordApi(updatePassword);
      console.log("result is",result);

      if (result.status === 200) {
        showToast(`${result.data.message}`, "success");
        
          handleLoginClick()
        
      } else {
         showToast(`${result.response.data.message}`, "error");
      }
    } catch (error) {
      console.log(error);
      showToast("Invalid OTP or error resetting password.","error");
    }

    setIsLoading(false)
  };

  return (
    <Modal centered show={showEnterDetailsModal} onHide={() => setShowEnterDetailsModal(false)}>
      <Modal.Header closeButton style={{ borderBottom: 'none' }}>
        <Modal.Title className='w-100 text-center'>Enter Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="ps-5 pe-5">
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
                  width: "50px",
                  height: "50px",
                  fontSize: "1.2rem",
                  textAlign: "center",
                  margin: "0 5px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            )}
          />

         {otpError && <p className="text-danger mt-2">{otpError}</p>}


        </div>

       
        

        <Form className='mb-5'>
          <Formfield
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            onChange={handlePasswordChange}
            id="formPassword"
          />

        {passwordError && <p className="text-danger mt-1">{passwordError}</p>}

          <Formfield
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            onChange={handleConfirmPasswordChange}
            id="formConfirmPassword"
          />

         {confirmPasswordError && <p className="text-danger mt-1">{confirmPasswordError}</p>}

        </Form>

        <SubmitButtons onClick={(e) => { e.preventDefault(); handleupdatePassword(e); }}>
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
                    Updating...
                  </>
                ) :" Submit "
                }
        </SubmitButtons>
      </Modal.Body>
    </Modal>
  );
};

export default EnterDetailsModal;
