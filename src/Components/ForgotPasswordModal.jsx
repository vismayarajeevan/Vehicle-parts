import React from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import SubmitButtons from '../reusablecomponents/SubmitButtons'
import Formfield from '../reusablecomponents/Formfield'



const ForgotPasswordModal = ({showForgotPasswordModal,setForgotPasswordModal, handleLoginClick,handleEnterDetailsModalClick}) => {

  
 
  return (
    <Modal show={showForgotPasswordModal} onHide={() => setForgotPasswordModal(false)}  centered>
        <Modal.Header className='mb-4' closeButton style={{ borderBottom: 'none' }}>
          <Modal.Title className='w-100 text-center'>Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body className='ps-5 pe-5'>
        <Form style={{marginBottom:'50px'}}>
        <Formfield label="Email" type="email" placeholder="Enter your email" onChange="{handleUsernameChange}" id="formEmail"/>
      </Form>
       {/* login button */}
      <SubmitButtons onClick={handleEnterDetailsModalClick}>Continue</SubmitButtons>
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