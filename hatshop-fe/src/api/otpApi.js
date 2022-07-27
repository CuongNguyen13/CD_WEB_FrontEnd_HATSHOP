import axiosClient from "./axiosClient";
export const otpApi = {
    createOTP(params) {
        const url = "/sendOTP2"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },
    //nhận kết quả từ api
    resendOtp(email) {
        // chỗ này ghi cái path tương ứng vs api
        const url = `/resetOTP2?email=${email}`

        // nếu có tham số thì axiosClient.get(url,{params});
        return axiosClient.get(url);

    },
    // getDetail(id) {
    //     // chỗ này ghi cái path tương ứng vs api
    //     const url = `/detailProduct/${id}`

    //     // nếu có tham số thì axiosClient.get(url,{params});
    //     return axiosClient.get(url);

    // },
}