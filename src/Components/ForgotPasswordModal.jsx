import React, { useState } from 'react'
import { Button, Form, InputGroup, Modal, Spinner } from 'react-bootstrap'
import SubmitButtons from '../reusablecomponents/SubmitButtons'
import Formfield from '../reusablecomponents/Formfield'
import { forgotApi } from '../services/allAPI'

import { showToast } from "../reusablecomponents/Toast";

const ForgotPasswordModal = ({showForgotPasswordModal,setForgotPasswordModal, handleLoginClick,handleEnterDetailsModalClick,setEnteredEmail}) => {

  // state for email
  const [forgotEmail, setForgotEmail] = useState({
    email:""
  })

  // state for error message
  const [emailError, setEmailError] = useState("")
  console.log(forgotEmail);

  // state for spinner
    const [isLoading, setIsLoading] = useState(false);

  
  // function for forgotpassword
  const handleForgotPassword = async(e)=>{
    e.preventDefault()
    console.log("inside forgot");

    // Check if email field is empty
    if (!forgotEmail.email.trim()) {
      setEmailError("Email field cannot be empty");
      return;
  }

    // email validation using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(forgotEmail.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }else{
      setEmailError("")
    }

   setIsLoading(true)

    try {
      const result = await forgotApi({ email: forgotEmail.email })
      console.log(result);

      if(result.status ==200){
         showToast(`${result.data.message}`, "success");

        // Store email for EnterDetailsModal
        setEnteredEmail(forgotEmail.email);

        // Clear the email field and close modal
         setForgotEmail({email:""})
         setForgotPasswordModal(false)

          // Open EnterDetailsModal
         handleEnterDetailsModalClick()
      }else{
        showToast(`${result.response.data.message}`, "error");
      }
        
      
    } catch (error) {
      // Extract proper error message 
              const errorMessage = error.response?.data?.message ||  error.message || "Something went wrong!";
      
              showToast(errorMessage, "error");
    }
    setIsLoading(false)
    
  }
  
 
  return (
    <Modal show={showForgotPasswordModal} onHide={() => setForgotPasswordModal(false)}  centered>
        <Modal.Header className='mb-4' closeButton style={{ borderBottom: 'none' }}>
          <Modal.Title className='w-100 text-center'>Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body className='ps-5 pe-5'>
        <Form style={{marginBottom:'50px'}}>
        <Formfield label="Email" type="email" placeholder="Enter your email" 
        onChange={(e)=>{
          setForgotEmail({ email: e.target.value }) 
          setEnteredEmail(e.target.value); 
        }}
          id="formEmail"/>
        {emailError && <p className="text-danger mt-1">{emailError}</p>}
      </Form>
       {/* login button */}
      <SubmitButtons onClick={handleForgotPassword}>
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
                ) :" Continue "
                }
        </SubmitButtons>
      {/* sign up */}
     <div className='d-flex align-items-center justify-content-center'>
        <p className="text-center text-muted">Back to
          <Button onClick={handleLoginClick} variant="link" className="p-0 text-decoration-none ms-2">Login</Button>
          </p>
     </div>
    </Modal.Body> 
  </Modal>
  )
}

export default ForgotPasswordModal