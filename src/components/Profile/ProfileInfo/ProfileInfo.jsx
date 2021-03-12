import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import noAvatar from '@img/noavatar.png';
import {ProfileStatusHooks} from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            {/*<img src={theme} alt="Тема"/>*/}
            <ProfileStatusHooks status={props.status} setStatus={props.setStatus}/>
        </div>
        <div className={s.description}>
            <div>
                <div>
                    <img src={!props.profile.photos.small ? noAvatar : props.profile.photos.small} alt=""/>
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
                            !props.profile.lookingForAJob ? <div>Не работаю</div> :
                                <div>{props.profile.lookingForAJobDescription}</div>

                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProfileInfo;