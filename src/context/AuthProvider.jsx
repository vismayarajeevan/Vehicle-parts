


import React, { createContext, useState, useEffect } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // State for authentication modal
  const [authenticationModal, setAuthenticationModal] = useState(false);

  // State to toggle between login and signup forms
  const [isRegister, setIsRegister] = useState(false);

  // State for forgot password modal
  const [showForgotPasswordModal, setForgotPasswordModal] = useState(false);

  // State for OTP modal
  const [showOtpModal, setShowOtpModal] = useState(false);

  // State for enter details modal
  const [showEnterDetailsModal, setShowEnterDetailsModal] = useState(false);

  // State for entered email (used in forgot password flow)
  const [enteredEmail, setEnteredEmail] = useState("");

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State for user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in (e.g., from sessionStorage)
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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

  // Function to handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  // Function to handle login (to be called after successful login)
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setAuthenticationModal(false);
  };

  // Context value to be passed down to components
  const contextValue = {
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
    isLoggedIn,
    setIsLoggedIn,
    handleLoginClick,
    handleSignUpClick,
    handleForgotPasswordClick,
    handleOtpModalClick,
    handleEnterDetailsModalClick,
    handleLogout,
    handleLoginSuccess, // Add this function
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};