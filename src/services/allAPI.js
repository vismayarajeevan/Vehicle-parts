import commonAPI from "./commonAPI"
import SERVER_URL from "./ServerURL"

export const registerApi =async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/auth/register`,reqBody)
}

export const otpApi =async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/auth/verifyotp`,reqBody)
}

export const loginApi =async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/auth/login`,reqBody)
}