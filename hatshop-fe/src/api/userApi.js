import axiosClient from "./axiosClient";
export const userApi = {
    getListUserAdmin(limit, page) {
        const url = `/admin/user?page=` + page + `&limit=` + limit
        return axiosClient.get(url)
    },
    blockUser(id){
        const url = "admin/block"
        return axiosClient.post(url,id)
    },
    userPayment(id) {
        const url = "user/payment/?id=" + id
        return axiosClient.get(url, id)
    }
}