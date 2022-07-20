import axiosClient from "./axiosClient";
export const cartApi = {
    createItemCart(params) {
        const url = "/cart/add"
        
        return axiosClient.post(url, params)
    },
    //nhận kết quả từ api
    getResult() {
        const url = "/sendOTP2"
        return axiosClient.get(url);

    },
    
}