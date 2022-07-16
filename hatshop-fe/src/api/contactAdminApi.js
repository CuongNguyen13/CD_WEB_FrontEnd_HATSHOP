import axiosClient from "./axiosClient";
export const contactAdminApi = {
    getListContact() {
        const url = "/admin/contact"
        return axiosClient.get(url);

    }
}