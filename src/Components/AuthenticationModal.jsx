import React, { useState } from 'react'
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import Formfield from "../reusablecomponents/Formfield";
import GoogleButton from "../reusablecomponents/GoogleButton";
import SubmitButtons from "../reusablecomponents/SubmitButtons";
import { registerApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import { showToast } from '../reusablecomponents/Toast';


const AuthenticationModal = ({authenticationModal,setAuthenticationModal,isRegister,togglePasswordVisibility,
    showPassword,handlePrimaryAction,handleSecondaryAction,handleForgotPasswordClick,handleOtpModalClick, setEnteredEmail}) => {

        // state for login
        const [loginFields,setLoginFields] = useState({
            email:"",password: ""
        })

        // state for signup
        const [signupFields, setSignupFields] = useState({
          userName: "", email: "",phoneNumber:"", password: "", confirmPassword: "",
        })

        // state for spinner
        const [isLoading,setIsLoading] = useState(false)


        console.log(signupFields);
        console.log(loginFields);

        // stae for error messages
        const[errors, setErrors] = useState({
          userName: "", email: "",phoneNumber:"", password: "", confirmPassword: "",
        })

        // validate username
        const validateUserName = (userName) => {
          const usernameRegex = /^[A-Za-z]+$/; 
          return usernameRegex.test(userName.trim());
      };
      

        // validate email
        const validateEmail =(email)=>{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // check the given mail with pattern using test method
            return emailRegex.test(email)
        }

        const validatePhoneNumber = (phoneNumber) => {
          const phoneRegex = /^\d{10}$/; // Strictly match 10 digits
          return phoneRegex.test(phoneNumber.trim());
        };
        

        // function for overall validation and give error message
        const handleValidation =()=>{
            // make the valid true
            let valid = true;
            // object to store errors
            let newErrors ={}

            if(isRegister){
                if(!validateUserName(signupFields.userName)){
                    valid=false;
                    newErrors.userName="Username must contain only alphabets."
                }  else if (signupFields.userName.trim().length < 3) {
                  valid = false;
                  newErrors.userName = "Username must be at least 3 characters long.";
              }

              if (!signupFields.phoneNumber || !signupFields.password || !signupFields.confirmPassword) {
                valid = false;
                newErrors.password = "Phonenumber, Password and Confirm Password are required.";
              } else if (signupFields.password !== signupFields.confirmPassword) {
                valid = false;
                newErrors.confirmPassword = "Passwords do not match.";
              }
            
            }

            // for email
            const email = isRegister? signupFields.email : loginFields.email
            if(!validateEmail(email)){
                valid=false;
                newErrors.email ="Invalid email format."
            }

            // phone number
           // Phone number validation
if (!signupFields.phoneNumber) {
  valid = false;
  newErrors.phoneNumber = "Phone number is required.";
} else if (!validatePhoneNumber(signupFields.phoneNumber)) {
  valid = false;
  newErrors.phoneNumber = "Phone number must contain exactly 10 digits.";
}

            // check all fields are filled in login page
            if (!email || (!loginFields.password && !isRegister)) {
              valid = false;
              newErrors.password = "All fields are required.";
            }
          

            // Update the errors state
            setErrors(newErrors);
            return valid;

        }

  


        

        const handleRegister = async(e)=>{
          e.preventDefault()
          
          if(handleValidation()){
            setIsLoading(true)
            try {
              const result = await registerApi(signupFields)
              console.log("result is",result);
              if(result.status ==200){
              
                showToast(`${result.data.message}`, 'success', {
                  position: "top-right",
                  autoClose: 3000,
                })
                setSignupFields({
                  userName: "",phoneNumber:"", password: "", confirmPassword: "",
                })

                setEnteredEmail(signupFields.email);
                handleOtpModalClick()

                 
              }else{
                showToast(`${result.data.message}`, 'error', {
                  position: "top-right",
                  autoClose: 3000,
                })
              }
           
              
            } catch (error) {
              console.log(error);
              showToast(`${result.data.message}`, 'error', {
                position: "top-right",
                autoClose: 3000,
              })
              
            }
            setIsLoading(false)
          }
        }

        // function for submit form
        const handleSubmit =(e)=>{
          e.preventDefault()



            if(isRegister){
          
                handleRegister(e)
               
            }else{
              console.log("");
              
            }
        }

        // function to clear fields while switching modal
        const handleSwitchingModal =()=>{
          setErrors({
            userName:"", email:"", password:"", confirmPassword:""
          })
          setSignupFields({
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          setLoginFields({
            email: "",
            password: "",
          });

          handleSecondaryAction()
        }


        
        
        

  return (
   <>
      <Modal show={authenticationModal} onHide={() => setAuthenticationModal(false)} centered>
        <Modal.Header closeButton style={{ borderBottom: "none" }}>
          <Modal.Title className="w-100 text-center">
            {isRegister ? "Sign Up" : "Login"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="ps-5 pe-5">
          <Form >
            {isRegister && (
              <>
              <Formfield label="Username" type="text" placeholder="Enter your username" id="formUsername" value={signupFields.userName}
              onChange={(e) => setSignupFields({ ...signupFields, userName: e.target.value })} />
            
               {errors.userName && (
                 <p className="text-danger" style={{fontSize:'12px'}}>{errors.userName}</p>  
               )}
              </>
            )}
  
            <Formfield
              label="Email"
              type="email"
              placeholder="Enter your email"
              id="formEmail"
              value={isRegister?signupFields.email:loginFields.email}
              onChange={(e)=>
                  isRegister
                  ? setSignupFields({...signupFields,email:e.target.value})
                  : setLoginFields({...loginFields,email:e.target.value})
              }
            />
            {
              errors.email && (
                <p className="text-danger" style={{fontSize:'12px'}}>{errors.email}</p>  
              )
            }
  
            {isRegister && (
               <>
               <Formfield label="PhoneNumber" type="number" placeholder="Enter your phonenumber" id="formPhoneNumber" value={signupFields.phoneNumber}
               onChange={(e) => setSignupFields({ ...signupFields, phoneNumber: e.target.value })} />
             
             {errors.phoneNumber && (
    <p className="text-danger" style={{ fontSize: '12px' }}>{errors.phoneNumber}</p>
  )}
  
               </>
            )}
  
            <Formfield
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              id="formPassword"
              value={isRegister?signupFields.password:loginFields.password}
              onChange={(e)=>
                  isRegister
                      ? setSignupFields({ ...signupFields, password: e.target.value })
                      : setLoginFields({ ...loginFields, password: e.target.value })
              }
            />
  
            {/* forgot password */}
            {
              !isRegister && (
                 <div className='d-flex justify-content-end align-items-center mb-3'>
            <Button variant='link' size='sm' className='p-0 text-decoration-none' onClick={handleForgotPasswordClick}>Forgot password?</Button>
           </div>
              )
            }
          
  
  
  
            {isRegister && (
              <>
              <Formfield
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                id="formConfirmPassword"
                value={signupFields.confirmPassword}
                onChange={(e)=>
                  setSignupFields({...signupFields,confirmPassword:e.target.value})
                }
              />
              {
              errors.confirmPassword && (
                <p className="text-danger" style={{fontSize:'12px'}}>{errors.confirmPassword}</p>  
              )
            }
  
              </>
            )}
  
            <SubmitButtons
           
             onClick={handleSubmit}
              // disabled={
              //   isRegister
              //     ? !signupFields.userName ||
              //       !signupFields.email ||
              //       !signupFields.password ||
              //       !signupFields.confirmPassword ||
              //       errors.userName ||
              //       errors.email ||
              //       errors.confirmPassword
              //     : !loginFields.email || !loginFields.password || errors.email
              // }

            >
              {isLoading ? (
    <>
      <Spinner animation="border" role="status" size="sm" className="me-2">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      {isRegister ? "Signing Up..." : "Logging In..."}
    </>
  ) : (
    isRegister ? "Sign Up" : "Login"
  )}
              {/* {isRegister ? "Sign Up" : "Login"} */}
            </SubmitButtons>

           
  
            {/* Divider */}
            <div className="text-center position-relative my-4">
              <div className="border-top"></div>
              <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted">
                or
              </span>
            </div>
  
            {/* Continue with Google */}
            <GoogleButton />
  
            {/* Secondary action */}
            <p className="text-center text-muted">
              {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
              <Button
                onClick={handleSwitchingModal}
                variant="link"
                className="p-0 text-decoration-none"
              >
                {isRegister ? "Login" : "Sign Up"}
              </Button>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
   </>
  )
}

export default AuthenticationModal