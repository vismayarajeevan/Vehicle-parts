import React from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import google_img from '../assets/google.png'
import SubmitButtons from '../reusablecomponents/SubmitButtons'

const LoginModal = ({showLoginModal, setShowLoginModal,togglePasswordVisibility, handleForgotPasswordClick, showPassword, handleSignUpClick}) => {
  return (
    <div>
        <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}  centered>
        <Modal.Header closeButton style={{ borderBottom: 'none' }}>
          <Modal.Title className='w-100 text-center'>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body className='ps-5 pe-5'>
        <Form>


           <Form.Group className='mb-3' controlId='formEmail'>
             <Form.Label>Email</Form.Label>
             <InputGroup>
             <Form.Control type='email' placeholder='Enter your email' />
             </InputGroup>
             </Form.Group>


             <Form.Group className='mb-1' controlId='formPassword'>
             <Form.Label>Password</Form.Label>
             <Form.Control type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
              <InputGroup onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
             </InputGroup>   
             </Form.Group>

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
        <button  className="btn w-100 mb-3 d-flex align-items-center justify-content-center gap-2 bg-white rounded" style={{border:'none', boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",transition: "box-shadow 0.3s ease-in-out",}}><img src={google_img} className='img-fluid' width={'35px'} height={'35px'} alt="" />Continue with Google</button>

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