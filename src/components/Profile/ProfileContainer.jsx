import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfileThunk, setStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withRedirect} from "../hoc/AuthRedirect";

//React.Component расширяет базовый класс компоненты
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authData;
            //если айди нет кидать на /login
            // if (!userId) {
            //     this.props.history.push("/login");
            // }
        }
        this.props.getUsersProfileThunk(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props}  />
    }
}

//еонтейнерная компонента снабжает нашу компоненту
//грубо говоря коннектим призентационную компоненту к данным из stora

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authData: state.auth.id,
    }
}
//withRouter параметры url с match ,params добавлят
export default compose(
    connect(mapStateToProps, {
        getUsersProfileThunk,
        setStatus,
        getStatus,
    }),
    withRouter,
    withRedirect
)(ProfileContainer);