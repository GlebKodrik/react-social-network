import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Massage';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    
    let messagesArray = props.state.messageData.map(m => <Message name={m.name} id={m.id}/>);
    let dealogsArray = props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} src={d.src}/>)
    
    let newMessageElement = React.createRef();
    let addMessage = () =>{
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={`${s.dialogsItem} `}>
                {dealogsArray}
            </div>
            <div className={`${s.dialogsMasseges} ${s.dialogsMassegesLocation}`}>
                {messagesArray}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <div>
                        <button onClick={addMessage}>Отправить сообщение</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;