import React, { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.svg";
import notification from "../assets/notification.png";
import { Container, Navbar, Form, Nav } from "react-bootstrap";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import NotificationSidebar from "./NotificationSidebar";
import ForgotPasswordModal from "./ForgotPasswordModal";
import OtpModal from "./OtpModal";

const Header = () => {
  // state for login modal
  const [showLoginModal, setShowLoginModal] = useState(false);
  // state for signup modal
  const [showSignupModal, setShowSignupModal] = useState(false);

  // state for forgot password modal
  const [showForgotPasswordModal, setForgotPasswordModal] = useState(false);

   const [showOtpModal, setShowOtpModal] = useState(false);



  // function to display login modal
  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
    setForgotPasswordModal(false);
  };

  // function to display signup modal
  const handleSignUpClick = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  // function to display forgot password modal
  const handleForgotPasswordClick = () => {
    setForgotPasswordModal(true);
    setShowLoginModal(false);
  };

  const handleOtpModalClick =()=>{
    setShowOtpModal(true)
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

      {/* ***************************login modal***************************** */}
      {showLoginModal && (
        <LoginModal
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
          togglePasswordVisibility={togglePasswordVisibility}
          handleForgotPasswordClick={handleForgotPasswordClick}
          showPassword={showPassword}
          handleSignUpClick={handleSignUpClick}
        />
      )}

      {/* ***************************forgot password modal***************************** */}
      {showForgotPasswordModal && (
        <ForgotPasswordModal
        showForgotPasswordModal={showForgotPasswordModal}
        setForgotPasswordModal={setForgotPasswordModal}
          
          handleLoginClick={handleLoginClick}
          handleOtpModalClick={handleOtpModalClick}
        />
      )}

       {/* ***************************otp modal***************************** */}
       {showOtpModal && (
        <OtpModal
          showOtpModal={showOtpModal}
          setShowOtpModal={setShowOtpModal}
          handleOtpModalClick={handleOtpModalClick}
        />
      )}

      {/* ***************************signup modal***************************** */}
      {showSignupModal && (
        <SignupModal
          showSignupModal={showSignupModal}
          setShowSignupModal={setShowSignupModal}
          togglePasswordVisibility={togglePasswordVisibility}
          showPassword={showPassword}
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
