import { authAPI, capthaAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "auth/SET-AUTH-USER-DATA";
const SET_CAPTCHA = "auth/SET_CAPTCHA";

let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  capthaUrl: null as string | null,
};

type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_CAPTCHA:
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
};

type SetAuthUserDataActionDataType = {
    id: number | null, email: string | null, login: string | null, isAuth: boolean | null
}
type SetAuthUserDataActionType={
    type: typeof SET_AUTH_USER_DATA,
    data: SetAuthUserDataActionDataType
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean | null): SetAuthUserDataActionType => ({
  type: SET_AUTH_USER_DATA,
  data: { id, email, login, isAuth },
});

type SetDataCaptchaActionType = {
    type: typeof SET_CAPTCHA,
    data: {capthaUrl: string}
}

export const setDataCaptcha = (capthaUrl: string): SetDataCaptchaActionType => ({
  type: SET_CAPTCHA,
  data: { capthaUrl },
});

export const loginThunk = () => async (dispatch: any) => {

  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string) => async (
  dispatch: any
) => {
  let response = await authAPI.logIn(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(loginThunk());
  } else {
    dispatch(getCaptcha());
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptcha = () => async (dispatch: any) => {
  let response = await capthaAPI.getCaptchaApi();
  dispatch(setDataCaptcha(response.data.url));
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
