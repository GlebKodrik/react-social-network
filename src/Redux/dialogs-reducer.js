const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

const dialogsReducer = (state,action) =>{
    switch (action.type) {
        case ADD_MESSAGE:
            let newElementMessage = {
                id: '1',
                name: state.newMessageText,
            }
            state.messageData.push(newElementMessage);
            state.newMessageText = "";
            return state;
        case CHANGE_NEW_MESSAGE:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const changeNewMessageCreator = (text) => ({type: CHANGE_NEW_MESSAGE , newText: text});
export default dialogsReducer;
