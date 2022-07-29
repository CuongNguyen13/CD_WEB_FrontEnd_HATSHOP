import axiosClient from "./axiosClient"
export const searchApi = {
checkSearchInput(name){
    const url = `/searchNoFilter?name=`+name
    return axiosClient.get(url);
},
createSearch(params) {
    const url = "/search"
    // gửi lên params là object
    return axiosClient.post(url, params)
},
//nhận kết quả từ api
getResult(){
    const url = "/search"
    return axiosClient.post(url);

}
}
