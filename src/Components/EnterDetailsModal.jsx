import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import OtpInput from 'react-otp-input';
import Formfield from '../reusablecomponents/Formfield';
import SubmitButtons from '../reusablecomponents/SubmitButtons';


const EnterDetailsModal = ({showEnterDetailsModal,setShowEnterDetailsModal,showPassword}) => {

    const [otp, setOtp] = useState('');

  return (
    <Modal centered show={showEnterDetailsModal} onHide={() => setShowEnterDetailsModal(false)}>
    <Modal.Header closeButton style={{ borderBottom: 'none' }}>
      <Modal.Title className='w-100 text-center'>Enter Details</Modal.Title>
    </Modal.Header>
    <Modal.Body className="ps-5 pe-5">
    <div className='mt-5 mb-5'>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => (
          <input
            {...props}
            style={{
              width: "50px", // Increase the width here
              height: "50px", // Optional: Adjust the height
              fontSize: "1.2rem", // Optional: Adjust font size
              textAlign: "center", // Center align text
              margin: "0 5px", // Add space between inputs
              border: "1px solid #ccc", // Optional: Add border styling
              borderRadius: "4px", // Optional: Add rounded corners
            }}
          />
        )}
      />
    </div>
    <Form className='mb-5'>
    <Formfield
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange="{handleUsernameChange}"
              id="formUsername"
            />
            <Formfield
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange="{handleUsernameChange}"
              id="formUsername"
            />
    </Form>
    <SubmitButtons >Submit</SubmitButtons>
    </Modal.Body>
  </Modal>
  )
}

export default EnterDetailsModal