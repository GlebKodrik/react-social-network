const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
        postsData : [
            {id: 1,likeCout:"57", dislikeCout:"12", date:"31.08.2020", message:"Наконец я начал учить реакт"},
            {id: 2,likeCout:"10432", dislikeCout:"1", date:"22.06.2000", message:"Толя кусок тупого дерьма"}
        ],
        newPostText: "",
        profile: null
}
const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST: {
            let newElementItem = {
                id: 5,
                message: state.newPostText,
                likeCout: "80",
                dislikeCout: "1",
                date: "Нету ее"
            }
            return {
                ...state,
                postsData: [...state.postsData,newElementItem],
                newPostText: "",
            }
        }
        case CHANGE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}
export const addPostCreator = () => ({type: ADD_POST});
export const onPostChangeCreator = (text) => ({type: CHANGE_NEW_POST , newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE , profile});
export default profileReducer;

