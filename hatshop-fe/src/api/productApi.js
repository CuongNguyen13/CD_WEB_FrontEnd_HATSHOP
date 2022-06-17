import axiosClient from "./axiosClient"
export const productApi = {
    getDetail(id) {
        // chỗ này ghi cái path tương ứng vs api
        const url = `/detailProduct/${id}`

        // nếu có tham số thì axiosClient.get(url,{params});
        return axiosClient.get(url);
    }
}