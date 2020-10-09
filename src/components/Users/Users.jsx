import React from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import noImage from '@img/noImage.jpg';

export const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }
    return <div>
        <button onClick={getUsers}>getUser</button>
        {
            props.users.map(u => <div key={u.id} className={s.usersRow}>
                <div className={s.usersFollow}>
                    <div>
                        <img src={u.photos.small != null ? u.photo.small : noImage} alt="Картинка" className={s.usersPhoto}/>
                    </div>
                    {u.followed ? <button onClick={() => props.unfollow(u.id)}>Отписаться</button> :
                        <button onClick={() => props.follow(u.id)}>Подписаться</button>}
                </div>
                <div className={s.usersInfo}>
                    <div>
                        <div className={s.usersFullName}>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </div>
                    <div>
                        <div className={s.userslocation}>"u.location.city",</div>
                        <div>"u.location.country"</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}
