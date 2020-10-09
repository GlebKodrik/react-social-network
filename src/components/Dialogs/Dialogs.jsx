import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Massage';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    let state = props.messagePage;
    let messagesArray = state.messageData.map(m => <Message key={m.id} name={m.name} id={m.id}/>);
    let dealogsArray = state.dialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name} src={d.src}/>)
    
    let newMessageElement = React.createRef();

    let onMessageChange = (e) =>{
        let text = e.target.value;
        props.changeNewMessageCreator(text);
    }
    let addMessage = () => {
        props.addMessageCreator();
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
                              value={state.newMessageText}/>
                    <div>
                        <button onClick={addMessage}>Отправить сообщение</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;