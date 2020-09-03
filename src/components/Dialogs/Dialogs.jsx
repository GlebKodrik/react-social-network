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

    let messageElements = [
        <Message text={messageData[0].text} id={messageData[0].id}/>,
        <Message text={messageData[1].text} id={messageData[1].id}/>,
        <Message text={messageData[2].text} id={messageData[2].id}/>
    ];

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name}/>
            </div>
            <div className={s.dialogsMesseges}>
                {
                    messageElements
                }
            </div>
        </div>
    )
}

export default Dialogs;