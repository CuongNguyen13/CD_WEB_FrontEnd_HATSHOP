import axiosClient from "./axiosClient";
export const loginApi = {
    createLogin(params) {
        const url = "/cc"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },
    //nhận kết quả từ api
    getResult(){
        const url = "/cc"
        return axiosClient.get(url);

    }
}