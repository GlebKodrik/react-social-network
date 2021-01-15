import React from 'react';
import s from './Content.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile} status={props.status} setStatus={props.setStatus}/>
        <MyPostContainer />
    </div>
}

export default Profile;