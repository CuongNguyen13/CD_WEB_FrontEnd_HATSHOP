import axiosClient from "./axiosClient"
export const searchApi = {
checkSearchInput(name){
    const url = `/searchNoFilter/?name=`+name
    return axiosClient.post(url);
}}