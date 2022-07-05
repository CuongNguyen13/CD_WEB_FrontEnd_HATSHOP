import axiosClient from "./axiosClient";
export const contactApi = {
    createContact(params) {
        const url = "/contact"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },
}