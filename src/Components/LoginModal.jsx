import React from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import google_img from '../assets/google.png'
import SubmitButtons from '../reusablecomponents/SubmitButtons'
import GoogleButton from '../reusablecomponents/GoogleButton'
import Formfield from '../reusablecomponents/Formfield'

const LoginModal = ({showLoginModal, setShowLoginModal,togglePasswordVisibility, handleForgotPasswordClick, showPassword, handleSignUpClick}) => {
  return (
    <div>
        <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}  centered>
        <Modal.Header closeButton style={{ borderBottom: 'none' }}>
          <Modal.Title className='w-100 text-center'>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body className='ps-5 pe-5'>
        <Form>


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

         {/* forgot password */}
         <div className='d-flex justify-content-end align-items-center mb-3'>
          <Button variant='link' size='sm' className='p-0 text-decoration-none' onClick={handleForgotPasswordClick}>Forgot password?</Button>
         </div>

         {/* login button */}
         
         <SubmitButtons >Login</SubmitButtons>

         {/* or */}
         <div className="text-center position-relative my-4">
          <div className='border-top'></div>
          <span className='position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted'>or</span>
         </div>

         {/* continue with google */}
       
        <GoogleButton />

        {/* sign up */}
        <p className="text-center text-muted">Don't have an account?{' '}
        <Button onClick={handleSignUpClick} variant="link" className="p-0 text-decoration-none">Sign up</Button>
        </p>

      </Form>
    </Modal.Body> 
  </Modal>
    </div>
  )
}

export default LoginModal