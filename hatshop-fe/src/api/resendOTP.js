import axiosClient from "./axiosClient";
export const resendOTP = {
    createResendOTP(params) {
        const url = "/sendOTP2"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },
}