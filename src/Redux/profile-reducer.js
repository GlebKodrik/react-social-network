import {profileAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
        postsData : [
            {id: 1,likeCout:"57", dislikeCout:"12", date:"31.08.2020", message:"Наконец я начал учить реакт"},
            {id: 2,likeCout:"10432", dislikeCout:"1", date:"22.06.2000", message:"Толя кусок тупого дерьма"}
        ],
        profile: null,
        status: "",
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newElementItem = {
                id: 5,
                message: action.newPostMessage,
                likeCout: "80",
                dislikeCout: "1",
                date: "Нету ее"
            }
            return {
                ...state,
                postsData: [...state.postsData,newElementItem],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}
export const addPostCreator = (newPostMessage) => ({type: ADD_POST , newPostMessage});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE , profile});
export const setProfileStatus = (status) => ({type: SET_STATUS , status: status});

export const getUsersProfileThunk = (userId) => async (dispatch) => {

    let response = await profileAPI.getUsersProfile(userId);
            dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) =>{
        let response = await profileAPI.getStatus(userId);
            dispatch(setProfileStatus(response.data));
}
export const setStatus = (status) => async (dispatch) =>{
        let response = await profileAPI.setStatus(status);
        if(response.data.resultCode === 0) {
            dispatch(setProfileStatus(status));
        }
}

export default profileReducer;

