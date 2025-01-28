import React, { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.svg";
import notification from "../assets/notification.png";
import { Container, Navbar, Form, Nav } from "react-bootstrap";

import NotificationSidebar from "./NotificationSidebar";
import ForgotPasswordModal from "./ForgotPasswordModal";
import OtpModal from "./OtpModal";
import EnterDetailsModal from "./EnterDetailsModal";
import AuthenticationModal from "./AuthenticationModal";

const Header = () => {
  // state for authentication modal
  const [authenticationModal, setAuthenticationModal]= useState(false)

  // state to check it is register modal or not
  const[isRegister, setIsRegister] = useState(false)

  // const [showLoginModal, setShowLoginModal] = useState(false);
  // // state for signup modal
  // const [showSignupModal, setShowSignupModal] = useState(false);

  // state for forgot password modal
  const [showForgotPasswordModal, setForgotPasswordModal] = useState(false);

  // state for otp modal
   const [showOtpModal, setShowOtpModal] = useState(false);

  // state for enter details modal
  const [showEnterDetailsModal, setShowEnterDetailsModal] = useState(false)



  // function to display login modal
  const handleLoginClick = () => {
    // setShowLoginModal(true);
    // setShowSignupModal(false);
    setAuthenticationModal(true)
    setIsRegister(false)
    setForgotPasswordModal(false);
  };

  // function to display signup modal
  const handleSignUpClick = () => {
    // setShowSignupModal(true);
    // setShowLoginModal(false);
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
    // setShowOtpModal(true)
    // setShowSignupModal(false)
    // setAuthenticationModal(false)
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
      <Navbar expand="lg" className="bg-body-light">
        <Container>
          <img src={logo} className="img-fluid me-5" width="50px" alt="" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="me-5">
              <Form.Control
                type="search"
                placeholder="Search here..."
                style={{
                  width: "300px",
                  border: "none",
                  background: "#F0F0F0",
                }}
                aria-label="Search"
              />
            </Form>
            <Nav className="me-auto">
              <Nav.Link href="#home" className="active me-5">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="me-5">
                My Posts
              </Nav.Link>
              <Nav.Link href="#link">Designs</Nav.Link>
            </Nav>
            <div>
              <button onClick={handleLoginClick} className="btn">
                {" "}
                <img src={user} className="img-fluid" width={"40px"} alt="" />
              </button>

              <button
                onClick={handleNotificationClick}
                className="btn position-relative "
                style={{ border: "none", background: "transparent" }}
              >
                <img
                  src={notification}
                  className="img-fluid ms-5"
                  width={"20px"}
                  alt=""
                  style={{ display: "block" }}
                />
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
        />
      )}

       {/* ***************************otp modal***************************** */}
       {showOtpModal && (
        <OtpModal
          showOtpModal={showOtpModal}
          setShowOtpModal={setShowOtpModal}
          
        />
      )}

         {/* ***************************enterdetails modal***************************** */}
         {showEnterDetailsModal && (
        <EnterDetailsModal
          showEnterDetailsModal={showEnterDetailsModal}
          setShowEnterDetailsModal={setShowEnterDetailsModal}
          showPassword={showPassword}
         
         
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
