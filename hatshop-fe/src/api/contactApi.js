import axiosClient from "./axiosClient";
export const contactApi = {
    createContact(params) {
        const url = "/contact"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },
    //nhận kết quả từ api
    getResult(){
        const url = "/contact"
        return axiosClient.get(url);

    }
}