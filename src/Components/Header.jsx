import React, { useState } from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user.svg'
import notification from '../assets/notification.png'
import { Container, Navbar,Form, Nav,Button,InputGroup, Modal } from 'react-bootstrap'
import google_img from '../assets/google.png'



const Header = () => {

  const [showLoginModal, setShowLoginModal] = useState(false);
  // const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
    // setShowSignupModal(false);
  };

  return (
    <>
          <Navbar expand="lg" className="bg-body-light">
      <Container>
        <img src={logo}  className='img-fluid me-5' width="50px" alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form className='me-5'>
            <Form.Control type="search" placeholder="Search here..." style={{ width:'300px', border:'none', background:'#F0F0F0' }}  aria-label="Search" />
          </Form>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='active me-5'>Home</Nav.Link>
            <Nav.Link href="#link" className='me-5'>My Posts</Nav.Link>
            <Nav.Link href="#link">Designs</Nav.Link>   
          </Nav>
          <div>
           <button onClick={handleLoginClick} className='btn'> <img src={user} className='img-fluid' width={'40px'} alt="" /></button>
            <img src={notification} className='img-fluid ms-5' width={'20px'} alt="" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

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
                <InputGroup>
                <Form.Control type='password' placeholder='Enter your password' />
                </InputGroup>
               </Form.Group>

               {/* forgot */}
               <div className='d-flex justify-content-end align-items-center mb-3'>
                <Button variant='link' size='sm' className='p-0 text-decoration-none'>Forgot password?</Button>
               </div>

               {/* login */}
               <Button className='w-100 mb-3 p-2' style={{ background: "linear-gradient(90deg, #008E8E 100%, #00B8BB 100%)", border: "none",color: "white",}}>Login</Button>

               {/* or */}
               <div className="text-center position-relative my-4">
                <div className='border-top'></div>
                <span className='position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted'>or</span>
               </div>

               {/* continue with google */}
              <button  className="btn w-100 mb-3 d-flex align-items-center justify-content-center gap-2 bg-white rounded" style={{border:'none', boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",transition: "box-shadow 0.3s ease-in-out",}}><img src={google_img} className='img-fluid' width={'35px'} height={'35px'} alt="" />Continue with Google</button>

              {/* sign up */}
              <p className="text-center text-muted">Don't have an account?{' '}
              <Button variant="link" className="p-0 text-decoration-none">Sign up</Button>
              </p>

            </Form>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Header