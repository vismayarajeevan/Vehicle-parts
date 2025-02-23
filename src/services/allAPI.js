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

// add part
export const addPartsApi =async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${SERVER_URL}/addParts`,reqBody,reqHeader)
}

// display all parts
export const displayAllPartsApi =async(searchKey)=>{
    return await commonAPI('GET',`${SERVER_URL}/getAllParts?latitude=null&longitude=null?search=${searchKey}`,{})
}

// my post

export const displayuserPartsApi =async(reqHeader)=>{
    return await commonAPI('GET',`${SERVER_URL}/getPartsOfUser`,{},reqHeader)
}

// edit mypost

export const edituserPartsApi =async(id,reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${SERVER_URL}/updateParts/${id}`,reqBody,reqHeader)
}

// edit mypost

export const deleteuserPartsApi =async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/deleteParts/${id}`,{},reqHeader)
}