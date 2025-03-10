import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import google_img from '../assets/google.png'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { googleAuthApi } from '../services/allAPI'
import { showToast } from './Toast'
import { AuthContext } from '../context/AuthProvider'

const GoogleButton = ({onClick}) => {

  const {handleLoginSuccess,setAuthenticationModal} =useContext(AuthContext)

  const handleGoogleLogin = async()=>{
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth,provider)
      // const credetial = GoogleAuthProvider.credentialFromResult(result)
      // const token = credetial.accessToken
      const user = result.user

      let uidvalue = user.uid 
      console.log(uidvalue);
      
      
      const authUID = await googleAuthApi({uid:uidvalue})
      console.log("authuid",authUID);

      if(authUID.status == 200){
        sessionStorage.setItem("token", authUID.data.token);
        sessionStorage.setItem("isAdmin", authUID.data.isAdmin);


        sessionStorage.setItem("userId", authUID.data.userId);

        setAuthenticationModal(false);

         showToast(`${authUID.data.message}`, "success");
         handleLoginSuccess()
      }
      
      // console.log("uid",uid);

      // console.log("user info",user);
      
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <Button
    onClick={handleGoogleLogin}
    className="w-100 mb-3 p-2"
    style={{ background: "#fff", color: "#000", border: "none",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",border:'none', transition:"box-shadow 0.3s ease-in-out" }}
  >
    <img src={google_img} className='img-fluid' width={'35px'} height={'35px'} alt="" />
    Continue with Google
  </Button>
  )
}

export default GoogleButton

