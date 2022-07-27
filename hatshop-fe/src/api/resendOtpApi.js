import axiosClient from "./axiosClient";
export const resendOtpApi = {
    createResendOTP(email) {
        const url = `/resetOTP2?email=${email}`
        // gửi lên params là object
        return axiosClient.post(url, email)
    },
}