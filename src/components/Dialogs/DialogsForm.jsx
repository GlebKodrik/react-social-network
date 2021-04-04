import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Massage';
import DialogItem from './DialogItem/DialogItem';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../Healpers/validator/validators";
import {useRedirect} from "../../hooks";
import {useDispatch, useSelector} from "react-redux";
import {getMessagePage} from "../../Redux/dialogs-selectors";
import {addMessageCreator} from "../../Redux/dialogs-reducer";

const maxLenght = maxLengthCreator(150);

const AddDialogForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit} action="">
            <Field component={Textarea} validate={[required, maxLenght]} name={"newMessage"}
                   placeholder={"Напиши сообщение"}/>
            <div>
                <button>Отправить сообщение</button>
            </div>
        </form>
    )
}

const AddDialogFormReduxForm = reduxForm({
    form: 'message'
})(AddDialogForm);

const Dialogs = (props) => {
    useRedirect();
    const messagePage = useSelector(getMessagePage);
    const dispatch = useDispatch();

    let state = messagePage;
    let messagesArray = state.messageData.map(m => <Message key={m.id} {...m}/>);
    let dealogsArray = state.dialogsData.map(d => <DialogItem key={d.id} {...d}/>)

    let addNewMessage = (values) => {
        dispatch(addMessageCreator(values.newMessage));
    }
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className={`${s.dialogsItem} `}>
                {dealogsArray}
            </div>
            <div className={`${s.dialogsMasseges} ${s.dialogsMassegesLocation}`}>
                {messagesArray}
                <AddDialogFormReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;