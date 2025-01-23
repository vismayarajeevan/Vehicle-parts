import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const Formfield = ({ label, type, placeholder, value, onChange, showPassword, togglePasswordVisibility, id }) => {

  return (
    <Form.Group className="mb-3" controlId={id}>
    <Form.Label style={{ fontSize: '13px', fontWeight: '500' }}>{label}</Form.Label>
    <Form.Control
      type={type === 'password' && showPassword ? 'text' : type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ fontSize: '12px', fontWeight: '200', padding: '10px' }}
    />
    {type === 'password' && (
      <InputGroup onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
    )}
  </Form.Group>
  
  )
}

export default Formfield