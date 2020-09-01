import React from 'react';
import theme from '../img/theme.jpg';
import h from './Content.module.css';
import MyPost from './MyPost/MyPost';

const Profile = () => {
    return <div className={h.content}>
        <div><img src={theme} alt="Тема" /></div>
        <div>ava + descrip</div>
        <MyPost />
    </div>
}

export default Profile;