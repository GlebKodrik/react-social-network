import {connect} from 'react-redux';
import {
    setCurrentPage,
    requestUsers,
    unfollowThunk,
    followThunk,
} from '../../Redux/users-reducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {withRedirect} from "../hoc/AuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../Redux/users-selector";


export class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (number) => {
        this.props.getUsers(number, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         totalUserCount: state.usersPage.totalUserCount,
//         pageSize: state.usersPage.pageSize,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUserCount: getTotalUserCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

//в обьекте делаем ссылки на AC
//мы закидываем в обьект AC

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers: requestUsers,
        unfollowThunk,
        followThunk,
    }),
    withRedirect
)(UsersContainer);