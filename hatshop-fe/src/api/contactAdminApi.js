import axiosClient from "./axiosClient";
export const contactAdminApi = {
    getListContact() {
        const url = "/admin/contact"
        return axiosClient.get(url);

    },

    updateStatus(params) {
        const url = "/admin/contact/update"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },

    sendMail(params){
        const url = "/admin/contact/send"
        return axiosClient.post(url,params)
    },
    getListPage(limit,page){
        const url =`/admin/contact?page=`+page+`&limit=`+limit
        
        return axiosClient.get(url)
    }

}