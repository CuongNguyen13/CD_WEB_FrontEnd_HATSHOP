import axiosClient from "./axiosClient"
export const productApi = {
    getDetail(id) {
        // chỗ này ghi cái path tương ứng vs api
        const url = `/detailProduct/${id}`

        // nếu có tham số thì axiosClient.get(url,{params});
        return axiosClient.get(url);

    },
    createProduct(params){
        const url = "/product"
        // gửi lên params là object
        return axiosClient.post(url,params)
    },
    getListProductNew(){
        const url = "/sort?field=date"
        return axiosClient.get(url);
    },

    getListProductAdmin(limit, page) {
        const url = `/admin/product?page=` + page + `&limit=` + limit
        return axiosClient.get(url)
    },

    deleteProduct(id){
        const url = "/admin/product/delete"
        // gửi lên params là object
        return axiosClient.post(url, id)
    },
    addProduct(params){
        const url = "/admin/product/add"
        return axiosClient.post(url,params);
    },

    checkName(name){
        const url = "/admin/product/checkname"
        return axiosClient.post(url, name);
    }

}