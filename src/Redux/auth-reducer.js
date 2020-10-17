const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false ,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id , email, login) => ({type: SET_AUTH_USER_DATA, data: {id,email,login}});

export default authReducer;
