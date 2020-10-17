import React from 'react';
import theme from '@img/theme.jpg';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img src={theme} alt="Тема"/>
        </div>
        <div className={s.description}>
            <div>
                <div>
                    <img src={props.profile.photos.small} alt=""/>
                </div>
                <div>
                    <div>
                        Имя: {props.profile.fullName}
                    </div>
                    <div>
                        Обо мне: {props.profile.aboutMe}
                    </div>
                    <div>
                        Соц. сети :
                        <span>facebook: {props.profile.contacts.facebook}</span>
                        <span>vk: {props.profile.contacts.vk}</span>
                        <span>twitter: {props.profile.contacts.twitter}</span>
                        <span>instagram: {props.profile.contacts.instagram}</span>
                        <span>github: {props.profile.contacts.github}</span>
                    </div>
                    <div>
                        {
                            !props.profile.lookingForAJob ? <div>Не работаю</div>: <div>{props.profile.lookingForAJobDescription}</div>

                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProfileInfo;