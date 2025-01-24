import React from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import Formfield from "../reusablecomponents/Formfield";
import google_img from "../assets/google.png";
import SubmitButtons from "../reusablecomponents/SubmitButtons";
import GoogleButton from "../reusablecomponents/GoogleButton";

const SignupModal = ({
  showSignupModal,
  setShowSignupModal,
  togglePasswordVisibility,
  showPassword,
  handleLoginClick,
  handleOtpModalClick
}) => {

  const handleSubmitClick = () => {
    handleOtpModalClick(); // Open OTP modal
  };
  return (
    <div>
      <Modal
        show={showSignupModal}
        onHide={() => setShowSignupModal(false)}
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: "none" }}>
          <Modal.Title className="w-100 text-center">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ps-5 pe-5">
          <Form>
            <Formfield
              label="Username"
              type="text"
              placeholder="Enter your username"
              onChange="{handleUsernameChange}"
              id="formUsername"
            />
            <Formfield
              label="Email"
              type="email"
              placeholder="Enter your email"
              onChange="{handleUsernameChange}"
              id="formEmail"
            />

            <Formfield
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange="{handleUsernameChange}"
              id="formUsername"
            />
            <Formfield
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange="{handleUsernameChange}"
              id="formUsername"
            />

            {/* signup */}
            <SubmitButtons onClick={handleSubmitClick}>Sign up</SubmitButtons>

            {/* or */}
            <div className="text-center position-relative my-4">
              <div className="border-top"></div>
              <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted">
                or
              </span>
            </div>

            {/* continue with google */}
            <GoogleButton />

            {/* sign up */}
            <p className="text-center text-muted">
              Already have an account?{" "}
              <Button
                onClick={handleLoginClick}
                variant="link"
                className="p-0 text-decoration-none"
              >
                Login
              </Button>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignupModal;
