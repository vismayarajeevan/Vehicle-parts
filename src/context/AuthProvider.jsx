// // AuthContext.js
// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authenticationModal, setAuthenticationModal] = useState(false);

//   const handleLoginClick = () => {
//     setAuthenticationModal(true);
//   };

//   return (
//     <AuthContext.Provider value={{ handleLoginClick, authenticationModal,setAuthenticationModal }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticationModal, setAuthenticationModal] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [showForgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showEnterDetailsModal, setShowEnterDetailsModal] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Function to open login modal
  const handleLoginClick = () => {
    setAuthenticationModal(true);
    setIsRegister(false);
    setShowOtpModal(false);
    setForgotPasswordModal(false);
    setShowEnterDetailsModal(false);
  };

  // Function to open signup modal
  const handleSignUpClick = () => {
    setAuthenticationModal(true);
    setIsRegister(true);
  };

  // Function to open forgot password modal
  const handleForgotPasswordClick = () => {
    setForgotPasswordModal(true);
    setAuthenticationModal(false);
  };

  // Function to open OTP modal
  const handleOtpModalClick = () => {
    setShowOtpModal(true);
    setAuthenticationModal(false);
  };

  // Function to open enter details modal
  const handleEnterDetailsModalClick = () => {
    setShowEnterDetailsModal(true);
    setForgotPasswordModal(false);
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticationModal,
        setAuthenticationModal,
        isRegister,
        setIsRegister,
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
        handleEnterDetailsModalClick,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
