import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import SubmitButtons from '../reusablecomponents/SubmitButtons'
import OtpInput from 'react-otp-input';



const OtpModal = ({handleOtpModalClick, showOtpModal, setShowOtpModal}) => {

    const [otp, setOtp] = useState('');
  return (
    <Modal centered show={showOtpModal} onHide={() => setShowOtpModal(false)}>
    <Modal.Header closeButton style={{ borderBottom: 'none' }}>
      <Modal.Title className='w-100 text-center'>Enter OTP</Modal.Title>
    </Modal.Header>
    <Modal.Body className="ps-5 pe-5">
       <div >
            <p>An OTP has been sent to the provided email address 
    <a href="">johnAb@gmail.com. </a> </p>
    <p>Please enter the OTP to proceed.</p>
    </div>
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
   
    <div>
        <Form>

        </Form>
    </div>
            <SubmitButtons>Submit</SubmitButtons>
       
    </Modal.Body>
    
  </Modal>
  )
}

export default OtpModal