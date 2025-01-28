import React from 'react'
import { Button } from 'react-bootstrap'



const SubmitButtons = ({onClick, className, style,children,disabled}) => {
  return (
    <Button
    onClick={onClick}
    className={className || "w-100 mb-3 p-2"}
    style={
      style || {
        background: "linear-gradient(90deg, #008E8E 100%, #00B8BB 100%)",
        border: "none",
        color: "white",
      }
    }
    disabled={disabled}
  >
    {children}
  </Button>
  )
}

export default SubmitButtons