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
    getlistCart(id){
        const url = "/cart/list/?id="+id
        return axiosClient.get(url);
    },
    deleteCart(id) {
        const url = "/cart/delete/?id=" + id
        return axiosClient.get(url);
    },
    checkEmpty(id) {
        const url = "/cart/checkEmpty/?id=" + id
        return axiosClient.get(url);
    }
    
    
}