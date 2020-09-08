import React from 'react';
import theme from '../../../img/theme.jpg';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img src={theme} alt="Тема" />
        </div>
        <div className={s.description}>
            ava + descrip
        </div>
    </div>
}

export default ProfileInfo;