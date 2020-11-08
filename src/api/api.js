import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "90c8d0b0-d86d-4adc-be7f-a75e85439450"
    },
});
//обьект а в нем методы
export const usersAPI = {
    getUsers(currentPage=1,pageSize=1){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
            response => response.data
        )
    }
}