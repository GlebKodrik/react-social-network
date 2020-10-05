import React from 'react';
import {addMessageCreator, changeNewMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagePage;

    let onMessageChange = (text) => {
        let action = changeNewMessageCreator(text);
        props.store.dispatch(action);
    }
    let addMessage = () => {
        props.store.dispatch(addMessageCreator());
    }
    return (
        <Dialogs addMessageCreator={addMessage} changeNewMessageCreator={onMessageChange}
                 messagePage={state}/>
    )
}

export default DialogsContainer;