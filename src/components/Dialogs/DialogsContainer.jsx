import React from 'react';
import { addMessageCreator, changeNewMessageCreator } from "../../Redux/dialogs-reducer";
import StoreContext from '../../StoreContext';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    return (<StoreContext.Consumer>
        { store => {
            let state = store.getState().messagePage;

            let onMessageChange = (text) => {
                let action = changeNewMessageCreator(text);
                store.dispatch(action);
            }
            let addMessage = () => {
                store.dispatch(addMessageCreator());
            }
            return <Dialogs addMessageCreator={addMessage} changeNewMessageCreator={onMessageChange}
                messagePage={state} />
        }
        }

    </StoreContext.Consumer>
    )
}

export default DialogsContainer;