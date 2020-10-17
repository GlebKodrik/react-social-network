import React from 'react';
import s from './Users.module.css'
import noImage from '@img/noImage.jpg';
import { NavLink } from 'react-router-dom';

export const Users = (props) => {

    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }
    return <div>
        <div className={s.numberPage}>
            {
                pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? s.currentNumber : s.noCurrentNumber}
                              onClick={() => props.onPageChanged(p)}>{p}</span>
                    )
                })
            }
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.usersRow}>
                <div className={s.usersFollow}>
                    <div>
                        <NavLink to={'/profile/'+ u.id}>
                            <img src={u.photos.small != null ? u.photos.small : noImage} alt="Картинка"
                                 className={s.usersPhoto}/>
                        </NavLink>
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
