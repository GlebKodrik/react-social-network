import React, {useEffect, useState} from 'react';

export const ProfileStatusHooks = (props) => {
    let [editmode, setEditMode] = useState(false);
    let [status, setStatusUse] = useState(props.status);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.setStatus(status);
    }
    const onStatusChange = (e) => {
        setStatusUse(e.currentTarget.value);
    }
    useEffect(()=>{
        setStatusUse(props.status);
    }, [props.status])
    return (
        <div>
            {!editmode &&
            <div>
                <span onClick={activateEditMode}>Ваш статус: {!props.status ? "-статуса нет-" : props.status}</span>
            </div>
            }
            {editmode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    )
}

