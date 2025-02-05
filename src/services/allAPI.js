import commonAPI from "./commonAPI"
import SERVER_URL from "./ServerURL"

// register
export const registerApi =async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/auth/register`,reqBody)
}

// otp
export const otpApi =async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/auth/verifyotp`,reqBody)
}

// login
export const loginApi =async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/auth/login`,reqBody)
}

// forgot
export const forgotApi =async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/auth/forgotPassword`,reqBody)
}

// login
export const googleAuthApi =async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/auth/googleSignin`,reqBody)
}


// reset Password
export const resetPasswordApi =async(reqBody)=>{
    return await commonAPI('PUT',`${SERVER_URL}/auth/resetPassword`,reqBody)
}

export const addPartsApi =async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${SERVER_URL}/addParts`,reqBody,reqHeader)
}
