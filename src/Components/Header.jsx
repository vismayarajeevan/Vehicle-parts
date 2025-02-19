import React, { useContext, useState } from "react";
import NotificationSidebar from "./NotificationSidebar";
import ForgotPasswordModal from "./ForgotPasswordModal";
import OtpModal from "./OtpModal";
import EnterDetailsModal from "./EnterDetailsModal";
import AuthenticationModal from "./AuthenticationModal";
import Navbarcomp from "./NavbarComp";
import { AuthContext } from "../context/AuthProvider";


const Header = ({onSearch}) => {

  const { 
    authenticationModal,
    setAuthenticationModal,
    isRegister,
    showForgotPasswordModal,
    setForgotPasswordModal,
    showOtpModal,
    setShowOtpModal,
    showEnterDetailsModal,
    setShowEnterDetailsModal,
    enteredEmail,
    setEnteredEmail,
    showPassword,
    togglePasswordVisibility,
    handleLoginClick,
    handleSignUpClick,
    handleForgotPasswordClick,
    handleOtpModalClick,
    handleEnterDetailsModalClick} = useContext(AuthContext);

 





  

  
 
   

 

  // state for show notifications
  // const [showNotifications, setShowNotifications] = useState(false);

  //  function for notification
  // const handleNotificationClick = () => {
  //   setShowNotifications(!showNotifications);
  // };



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

      {/* <NotificationSidebar
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      /> */}
    </>
  );
};

export default Header;
