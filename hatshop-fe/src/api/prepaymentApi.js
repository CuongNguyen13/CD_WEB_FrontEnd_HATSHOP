import axiosClient from "./axiosClient";
export const prepaymentApi = {
    save(params) {
        const url = "/prepayment/save"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },
    bill(id) {
        const url = "/bill/?id="+id
        // gửi lên params là object
        return axiosClient.get(url)
    },
   
   
    orderAdmin(limit, page) {
        const url = `/admin/prepayment?page=` + page + `&limit=` + limit
        return axiosClient.get(url)
    },

    updateStatus(id, status) {
        const url = `/admin/order/status/?id=` + id + `&status=` + status
        return axiosClient.get(url)
    }
}