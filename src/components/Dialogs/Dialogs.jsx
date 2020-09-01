import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return <div className={`${s.dialogItemMesseges} ${s.activeMesseges}`}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
}
const Message = (props) => {
    return <div className={s.dialogItemMesseges}>{props.text}</div>
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id="1" name="Глеб"/>
                <DialogItem id="2" name="Вася"/>
                <DialogItem id="3" name="Ваня"/>
                <DialogItem id="4" name="Михаил"/>
                <DialogItem id="5" name="Камат"/>
                <DialogItem id="6" name="Анатолий"/>
            </div>
            <div className={s.dialogsMesseges}>
                <Message text="Првиет меня зовут Глеб"/>
                <Message text="Ну ты можешь пойти нахуй"/>
                <Message text="Толя мне похуй на тебя"/>
            </div>
        </div>
    )
}

export default Dialogs;