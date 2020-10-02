import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Massage';
import DialogItem from './DialogItem/DialogItem';
import {addMessageCreator, changeNewMessageCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    let messagesArray = props.messagePage.messageData.map(m => <Message name={m.name} id={m.id}/>);
    let dealogsArray = props.messagePage.dialogsData.map(d => <DialogItem id={d.id} name={d.name} src={d.src}/>)
    
    let newMessageElement = React.createRef();

    let onMessageChange = (e) =>{
        let text = e.target.value;
        let action = changeNewMessageCreator(text);
        props.dispatch(action);
    }
    let addMessage = () => {
        props.dispatch(addMessageCreator());
    }
    return (
        <div className={s.dialogs}>
            <div className={`${s.dialogsItem} `}>
                {dealogsArray}
            </div>
            <div className={`${s.dialogsMasseges} ${s.dialogsMassegesLocation}`}>
                {messagesArray}
                <div>
                    <textarea onChange={onMessageChange}
                              ref={newMessageElement}
                              value={props.messagePage.newMessageText}/>
                    <div>
                        <button onClick={addMessage}>Отправить сообщение</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;