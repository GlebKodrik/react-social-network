import React from 'react';
import s from './Dialogs.module.css'
const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialogItemMesseges}>Вася</div>
                <div className={`${s.dialogItemMesseges} ${s.activeMesseges}`}>Глеб</div>
                <div className={s.dialogItemMesseges}>Михаил</div>
                <div className={s.dialogItemMesseges}>Андрей</div>
                <div className={s.dialogItemMesseges}>Ирина</div>
                <div className={s.dialogItemMesseges}>Катя</div>      
            </div>
            <div className={s.dialogsMesseges}>
                <div className={s.dialogItemMesseges}>Lorem ipsum dolor sit amet.</div>
                <div className={s.dialogItemMesseges}>Lorem ipsum dolor sit amet.</div>
                <div className={s.dialogItemMesseges}>Lorem ipsum dolor sit amet consectetur.</div>
                <div className={s.dialogItemMesseges}>Lorem ipsum dolor sit.</div>
            </div>
        </div>
    )
}

export default Dialogs;