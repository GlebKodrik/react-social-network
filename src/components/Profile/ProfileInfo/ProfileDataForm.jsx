import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import noAvatar from '../../../img/noavatar.png';
import {ProfileStatusHooks} from "./ProfileStatusHooks";

const ProfileInfo = ({setStatus, status, ...props}) => {
    const [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        let path = e.target.files[0];
        if (path) {
            props.savePhoto(path);
        }
    }
    return <div>
        <div>
            {/*<img src={theme} alt="Тема"/>*/}
            <ProfileStatusHooks status={status} setStatus={setStatus} isOwner={props.isOwner}/>
        </div>
        <div>
            {props.isFetching ? <Preloader/> : <img src={props.profile.photos.large || noAvatar} alt=""/>}
        </div>
        {props.isOwner && <input type={"file"} onChange={props.onMainPhotoSelected}/>}
        {!editMode ?
            <ProfileData profile={props.profile} onMainPhotoSelected={onMainPhotoSelected} changeEditMode={() => {setEditMode(true)}}/>
                      : <ProfileDataForm />
        }
    </div>
}

const ProfileData = ({profile, ...props}) => {
    return <div className={s.description}>
        <div>
            <button onClick={props.changeEditMode}>Изменить профиль</button>
            <div>
                <div><span>Ищу работу:</span> {!profile.lookingForAJob ? "Нет" : "Да"}</div>
                {profile.lookingForAJob &&
                <div><span>Описание работы:</span> {!profile.lookingForAJobDescription && "Нету описания"}</div>
                }
                <div>
                    <span>Имя:</span> {profile.fullName}
                </div>
                <div>
                    <span>Обо мне:</span> {!profile.aboutMe && "информации нет"}
                </div>
                <div>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
            </div>
        </div>
    </div>
}
const ProfileDataForm = ({isFetching, profile, ...props}) => {
    return <div>
        Forma
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return contactValue && <div>{contactTitle} : {contactValue}</div>
}

export default ProfileInfo;