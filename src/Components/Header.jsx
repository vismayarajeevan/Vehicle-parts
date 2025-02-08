import React, { useState } from "react";
import NotificationSidebar from "./NotificationSidebar";
import ForgotPasswordModal from "./ForgotPasswordModal";
import OtpModal from "./OtpModal";
import EnterDetailsModal from "./EnterDetailsModal";
import AuthenticationModal from "./AuthenticationModal";
import Navbarcomp from "./NavbarComp";

const Header = ({onSearch}) => {
  // state for authentication modal
  const [authenticationModal, setAuthenticationModal]= useState(false)

  // state to check it is register modal or not
  const[isRegister, setIsRegister] = useState(false)

  

  // state for forgot password modal
  const [showForgotPasswordModal, setForgotPasswordModal] = useState(false);

  // state for otp modal
   const [showOtpModal, setShowOtpModal] = useState(false);

  // state for enter details modal
  const [showEnterDetailsModal, setShowEnterDetailsModal] = useState(false)

  // state to store email in otpmodal
  const [enteredEmail, setEnteredEmail] = useState('');





  // function to display login modal
  const handleLoginClick = () => {
    
    setAuthenticationModal(true)
    setIsRegister(false)
    setShowOtpModal(false)
     setForgotPasswordModal(false);
     setShowEnterDetailsModal(false)
  };

  // function to display signup modal
  const handleSignUpClick = () => {
    
    setAuthenticationModal(true)
    setIsRegister(true)
  };

  // function to display forgot password modal
  const handleForgotPasswordClick = () => {
    setForgotPasswordModal(true);
    // setShowLoginModal(false);
    setAuthenticationModal(false)
  };

   // function to display otp modal
  const handleOtpModalClick =()=>{
     setShowOtpModal(true)
    
    setAuthenticationModal(false)
  }
 
   // function to display enterdetails modal
   const handleEnterDetailsModalClick =()=>{
    setShowEnterDetailsModal(true)
    setForgotPasswordModal(false)
  }

  // state for eye icon
  const [showPassword, setShowPassword] = useState(false);

  // function to show password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // state for show notifications
  const [showNotifications, setShowNotifications] = useState(false);

  //  function for notification
  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };



  return (
    <>
      {/* *******************************navbar****************************** */}
      

<Navbarcomp handleLoginClick={handleLoginClick} onSearch={onSearch}/>
      {/* ***************************login and signup modal***************************** */}
     

      {
        authenticationModal && (
          <AuthenticationModal 
          authenticationModal={authenticationModal}
          setAuthenticationModal={setAuthenticationModal}
          isRegister={isRegister}
          togglePasswordVisibility={togglePasswordVisibility}
          showPassword={showPassword}
          handlePrimaryAction={isRegister ? handleOtpModalClick : () => {}}
          handleSecondaryAction={isRegister ? handleLoginClick : handleSignUpClick}
          handleForgotPasswordClick={handleForgotPasswordClick}
          handleOtpModalClick={handleOtpModalClick}

          setEnteredEmail={setEnteredEmail}

         

          />
        )
      }

      {/* ***************************forgot password modal***************************** */}
      {showForgotPasswordModal && (
        <ForgotPasswordModal
        showForgotPasswordModal={showForgotPasswordModal}
        setForgotPasswordModal={setForgotPasswordModal}
        handleEnterDetailsModalClick={handleEnterDetailsModalClick}
          handleLoginClick={handleLoginClick}  
          setEnteredEmail ={setEnteredEmail}
        />
      )}

       {/* ***************************otp modal***************************** */}
       {showOtpModal && (
        <OtpModal
          showOtpModal={showOtpModal}
          setShowOtpModal={setShowOtpModal}
          handleLoginClick={handleLoginClick}
          enteredEmail={enteredEmail}
          
        />
      )}

         {/* ***************************enterdetails modal***************************** */}
         {showEnterDetailsModal && (
        <EnterDetailsModal
          showEnterDetailsModal={showEnterDetailsModal}
          setShowEnterDetailsModal={setShowEnterDetailsModal}
          showPassword={showPassword}
          enteredEmail={enteredEmail}
          handleLoginClick={handleLoginClick}
         
         
        />
      )}

     

      {/* ***************************notifications***************************** */}

      <NotificationSidebar
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
    </>
  );
};

export default Header;
