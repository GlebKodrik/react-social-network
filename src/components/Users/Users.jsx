import React, {useState} from 'react';
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";

export const Users = ({pageSize, totalUserCount, onPageChanged, numberPage, ...props}) => {
    return <div>
        <Paginator totalUserCount={totalUserCount} pageSize={pageSize} onPageChanged={onPageChanged}
                   numberPage={numberPage} currentPage={props.currentPage} />
        <div>
            {
                props.users.map(u => <User user={u} followingInProgress={props.followingInProgress}
                                           unfollowThunk={props.unfollowThunk}
                                           followThunk={props.followThunk} key={u.id}/>)
            }
        </div>
    </div>
}
