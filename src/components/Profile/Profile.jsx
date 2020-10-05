import React from 'react';
import s from './Content.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo />
        <MyPostContainer store={props.store}/>
    </div>
}

export default Profile;