import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Massage';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    
    let messagesArray = props.messageData.map(m => <Message name={m.name} id={m.id}/>);
    let dealogsArray = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name} src={d.src}/>)

    return (
        <div className={s.dialogs}>
            <div className={`${s.dialogsItem} `}>
                {dealogsArray}
            </div>
            <div className={`${s.dialogsMasseges} ${s.dialogsMassegesLocation}`}>
                {messagesArray}
            </div>
        </div>
    )
}

export default Dialogs;