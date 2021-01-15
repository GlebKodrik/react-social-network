import {connect} from 'react-redux';
import {
    setCurrentPage,
    getUsers,
    unfollowThunk,
    followThunk,
} from '../../Redux/users-reducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {withRedirect} from "../hoc/AuthRedirect";
import {compose} from "redux";


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

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (current) => {
            dispatch(setCurrentPageAC(current))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/
//в обьекте делаем ссылки на AC
//мы закидываем в обьект AC

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers,
        unfollowThunk,
        followThunk,
    }),
    withRedirect
)(UsersContainer);