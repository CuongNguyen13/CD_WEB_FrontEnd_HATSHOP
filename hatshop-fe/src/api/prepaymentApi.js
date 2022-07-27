import axiosClient from "./axiosClient";
export const prepaymentApi = {
    save(params) {
        const url = "/prepayment/save"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },

}