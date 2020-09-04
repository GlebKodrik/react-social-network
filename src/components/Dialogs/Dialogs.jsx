import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return <div className={`${s.dialogItemMesseges} ${s.activeMesseges}`}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
}

const Message = (props) => {
    return <div className={s.dialogItemMesseges}>{props.text}</div>
}

    let dialogsData = [
        {id:"1", name:"Глеб"},
        {id:"2", name:"Вася"},
        {id:"3", name:"Ваня"},
        {id:"4", name:"Михаил"},
        {id:"5", name:"Камат"},
        {id:"6", name:"Анатолий"}
    ];

    let messageData = [
        {id: 1 , text:"Првиет меня зовут Глеб"},
        {id: 2 , text:"Ну ты можешь пойти нахуй"},
        {id: 3 , text:"Толя мне похуй на тебя"}
    ];
    
    let messagesArray = messageData.map(m => <Message text={m.text} id={m.id}/>);
    let dealogsArray = dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dealogsArray}
            </div>
            <div className={s.dialogsMesseges}>
                {messagesArray}
            </div>
        </div>
    )
}

export default Dialogs;