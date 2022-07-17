import axiosClient from "./axiosClient";
export const forgetpassApi = {
    createForgetpass(params) {
        const url = "/forgetpass2"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },
    //nhận kết quả từ api
    getResult(){
        const url = "/forgetpass2"
        return axiosClient.get(url);

    }
}