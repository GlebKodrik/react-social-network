import React from 'react';
import s from './Content.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return <div className={s.content}>
        <ProfileInfo />
        <MyPost postsData={props.postsData}/>
    </div>
}

export default Profile;