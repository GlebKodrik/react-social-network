import React, {useEffect} from 'react';
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, getUsersProfileThunk} from "../../Redux/profile-reducer";
import {getIsFetching} from "../../Redux/users-selector";
import {useRouteMatch, useHistory} from 'react-router-dom'
import {getError, getProfile, getStatusSel} from "../../Redux/profile-selectors";
import {getAuthData} from "../../Redux/auth-selectors";
import {useRedirectAuth} from "../../hooks";

//React.Component расширяет базовый класс компоненты
const ProfileContainer = () => {
    const profile = useSelector(getProfile);
    const status = useSelector(getStatusSel);
    const error = useSelector(getError);
    const authData = useSelector(getAuthData);
    const isFetching = useSelector(getIsFetching);
    const match = useRouteMatch();
    const history = useHistory();
    const dispatch = useDispatch();

    const refreshProfile = () => {
        //match от withRouter(работа с url)
        let userId = match.params.userId;
        if (!userId) {
            userId = authData;
            // если айди нет кидать на /login
            if (!userId) {
                history.push("/login");
            }
        }
        dispatch(getUsersProfileThunk(userId));
        dispatch(getStatus(userId));
    }

    useEffect(() => {
        refreshProfile();
    }, [match.params.userId])

    useRedirectAuth();

    return <Profile {...{
        profile,
        status,
        error,
        authData,
        isFetching
    }} isOwner={!match.params.userId}/>
}

export default ProfileContainer;