import axiosClient from "./axiosClient"
export const profileApi = {
    getDetailProfile(id) {
        // chỗ này ghi cái path tương ứng vs api
        const url = `/Profile`

        // nếu có tham số thì axiosClient.get(url,{params});
        return axiosClient.get(url);

    },
    getProfile(id){
        const url = "/Profile"
        // gửi lên params là object
        return axiosClient.post(url,id)
    },
    createProfile(params) {
        const url = "/UpdateProfile"
        // gửi lên params là object
        return axiosClient.post(url, params)
    },
}