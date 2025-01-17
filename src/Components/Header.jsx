import React from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user.svg'
import notification from '../assets/notification.png'
import { Container, Navbar,Form, Nav } from 'react-bootstrap'


const Header = () => {
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
            <img src={user} className='img-fluid' width={'40px'} alt="" />
            <img src={notification} className='img-fluid ms-5' width={'20px'} alt="" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header