import React, { useState } from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user.svg'
import notification from '../assets/notification.png'
import { Container, Navbar,Form, Nav,Button,InputGroup, Modal, Offcanvas, Badge } from 'react-bootstrap'
import google_img from '../assets/google.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Bell } from 'lucide-react'
import Formfield from '../reusablecomponents/Formfield'



const Header = () => {

  // state for login modal
  const [showLoginModal, setShowLoginModal] = useState(false);
  // state for signup modal 
  const [showSignupModal, setShowSignupModal] = useState(false);

  // state for forgot password modal
  const [showForgotPasswordModal, setForgotPasswordModal] = useState(false)

 

  // function to display login modal
  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
    setForgotPasswordModal(false)
  };

  // function to display login modal
  const handleSignUpClick =() =>{
     setShowSignupModal(true)
     setShowLoginModal(false)
  }

  // function to display forgot password modal
  const handleForgotPasswordClick =() =>{
    setForgotPasswordModal(true)
    setShowLoginModal(false)
 }


  // state for eye icon
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

   // state for show notifications
   const [showNotifications, setShowNotifications] = useState(false)

  //  function for notification
  const handleNotificationClick =()=>{
    setShowNotifications(!showNotifications)
  }

  return (
    <>
      {/* *******************************navbar****************************** */}
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

           <button onClick={handleNotificationClick} className='btn position-relative ' style={{ border: 'none', background: 'transparent' }}>
            <img src={notification} className='img-fluid ms-5' width={'20px'} alt=""  style={{ display: 'block' }}/>
            {/* notification badge */}
            {/* <Badge  bg="danger"
              className="position-absolute top-5 end-0 translate-middle rounded-circle"   style={{ width: '18px', height: '18px',  }}
            >3</Badge> */}
            </button>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   {/* ***************************login modal***************************** */}
   {showLoginModal && (
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
        <Button onClick={handleSignUpClick} variant="link" className="p-0 text-decoration-none">Sign up</Button>
        </p>

      </Form>
    </Modal.Body> 
  </Modal>
  )}

     {/* ***************************forgot password modal***************************** */}
     {showForgotPasswordModal && (
      <Modal show={showForgotPasswordModal} onHide={() => showForgotPasswordModal(false)}  centered>
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
         <Button className='w-100 mb-3 p-2' style={{ background: "linear-gradient(90deg, #008E8E 100%, #00B8BB 100%)", border: "none",color: "white",}}>Continue</Button>

         

        {/* sign up */}
        <p className="text-center text-muted">Back to
        <Button onClick={handleLoginClick} variant="link" className="p-0 text-decoration-none ms-2">Login</Button>
        </p>

      </Form>
    </Modal.Body> 
  </Modal>
  )}



   {/* ***************************signup modal***************************** */}
  {showSignupModal && (
    <Modal show={showSignupModal} onHide={() => setShowSignupModal(false)}  centered>
       <Modal.Header closeButton style={{ borderBottom: 'none' }}>
         <Modal.Title className='w-100 text-center'>Sign Up</Modal.Title>
       </Modal.Header>
       <Modal.Body className='ps-5 pe-5'>
       <Form>
       <Formfield
    label="Username"
    type="text"
    placeholder="Enter your username"
    value="{username}"
    onChange="{handleUsernameChange}"
    id="formUsername"
  />
        {/* <Form.Group className='mb-3' controlId='formUsername'>
          <Form.Label style={{fontSize:'13px', fontWeight:'500'}}>Username</Form.Label>
          <InputGroup>
          <Form.Control type='text' placeholder='Enter your username' style={{ fontSize: "12px" , fontWeight:'200', padding:'10px'}}/>
          </InputGroup>
        </Form.Group> */}
        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label style={{fontSize:'13px', fontWeight:'500'}}>Email</Form.Label>
          <InputGroup>
          <Form.Control type='email' placeholder='Enter your email' />
          </InputGroup>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPassword'>
             <Form.Label style={{fontSize:'13px', fontWeight:'600'}}>Password</Form.Label>
             <Form.Control type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
              <InputGroup onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
             </InputGroup>
          </Form.Group>
       <Form.Group className='mb-4' controlId='formPassword'>
          <Form.Label style={{fontSize:'13px', fontWeight:'600'}}>Confirm Password</Form.Label>
          
          <Form.Control type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
          <InputGroup onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
          </InputGroup>
          </Form.Group>

       {/* login */}
       <Button className='w-100 mb-3 p-2' style={{ background: "linear-gradient(90deg, #008E8E 100%, #00B8BB 100%)", border: "none",color: "white",}}>Sign up</Button>

       {/* or */}
       <div className="text-center position-relative my-4">
        <div className='border-top'></div>
        <span className='position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted'>or</span>
       </div>

       {/* continue with google */}
       <button  className="btn w-100 mb-3 d-flex align-items-center justify-content-center gap-2 bg-white rounded" style={{border:'none', boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",transition: "box-shadow 0.3s ease-in-out",}}><img src={google_img} className='img-fluid' width={'35px'} height={'35px'} alt="" />Continue with Google</button>

       {/* sign up */}
       <p className="text-center text-muted">Already have an account?{' '}
         <Button onClick={handleLoginClick} variant="link" className="p-0 text-decoration-none">Login</Button>
       </p>

     </Form>
   </Modal.Body>
</Modal>
  )}

     {/* ***************************notifications***************************** */}
     
     <Offcanvas show={showNotifications} onHide={()=>setShowNotifications(false)} placement='end'>
      <Offcanvas.Header closeButton className="border-bottom">
        <Offcanvas.Title>Notifications</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* 1st notifications */}
        <div className="p-3 border-bottom bg-light" style={{ cursor: 'pointer' }}>
          <div className='d-flex gap-3'>
           <Bell className='text-primary' size={20} />
           <div className='flex-grow-1'>
            <h6 className='mb-1'>New Arrival</h6>
            <p className='mb-1 text-muted'>Check out our new brake pads collection!</p>
            <small className='text-muted'>2 hours ago</small>
            </div>
            
        </div>
        </div>

          {/* 2nd notifications */}
          <div className="p-3 border-bottom bg-light" style={{ cursor: 'pointer' }}>
          <div className='d-flex gap-3'>
           <Bell className='text-primary' size={20} />
           <div className='flex-grow-1'>
            <h6 className='mb-1'>Special Offer</h6>
            <p className='mb-1 text-muted'>Get 20% off on all engine parts this week</p>
            <small className='text-muted'>5 hours ago</small>
            </div>
            
        </div>
        </div>
      </Offcanvas.Body>

     </Offcanvas>
    
    </>
  )
}

export default Header