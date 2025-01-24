import React from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import SubmitButtons from '../reusablecomponents/SubmitButtons'



const ForgotPasswordModal = ({showForgotPasswordModal,setForgotPasswordModal, handleLoginClick,handleOtpModalClick}) => {
  const handleContinueClick = () => {
    handleOtpModalClick(); // Open OTP modal
  };
  
 
  return (
    <Modal show={showForgotPasswordModal} onHide={() => setForgotPasswordModal(false)}  centered>
        <Modal.Header className='mb-4' closeButton style={{ borderBottom: 'none' }}>
          <Modal.Title className='w-100 text-center'>Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body className='ps-5 pe-5'>
        <Form>
           <Form.Group className='mb-5' controlId='formEmail'>
             <Form.Label>Email</Form.Label>
             <InputGroup>
             <Form.Control type='email' placeholder='Enter your email' />
             </InputGroup>
             </Form.Group>
         {/* login button */}
         <SubmitButtons onClick={handleContinueClick}>Continue</SubmitButtons>

        
        {/* sign up */}
        <p className="text-center text-muted">Back to
        <Button onClick={handleLoginClick} variant="link" className="p-0 text-decoration-none ms-2">Login</Button>
        </p>

      </Form>
    </Modal.Body> 
  </Modal>
  )
}

export default ForgotPasswordModal