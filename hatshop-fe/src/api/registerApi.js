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

    },
    checkEmailExist(email) {
        // chỗ này ghi cái path tương ứng vs api
        const url = `http://localhost:8080/checkEmailExist?email=${email}`
        // nếu có tham số thì axiosClient.get(url,{params});
        return axiosClient.get(url);

    },
    getId(email) {
        // chỗ này ghi cái path tương ứng vs api
        const url = `/getId?email=${email}`
        // nếu có tham số thì axiosClient.get(url,{params});
        console.log("url",url)
        return axiosClient.get(url);
    },
}