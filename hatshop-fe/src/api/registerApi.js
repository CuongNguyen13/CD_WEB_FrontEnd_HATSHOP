import axiosClient from "./axiosClient";
export const registerApi = {
    createRegister(params) {
        const url = "/register2"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },
    //nhận kết quả từ api
    getResult(){
        const url = "/register2"
        return axiosClient.get(url);

    }
}