import axiosClient from "./axiosClient";
export const prepaymentApi = {
    save(params) {
        const url = "/prepayment/save"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },
    bill(id) {
        const url = "/bill/?id="+id
        // gửi lên params là object
        return axiosClient.get(url)
    },
}