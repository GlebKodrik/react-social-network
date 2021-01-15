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
    },
    follow(userId){
        return instance.post(`follow/${userId}`,{})
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },

}

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    logIn(email,password,rememberMe=false){
        return instance.post(`auth/login`,{email,password,rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}

export const profileAPI = {
    getUsersProfile(userId){
        return instance.get(`profile/` + userId);
    },
    setStatus(status){
        return instance.put(`profile/status/`, {status});
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
}