import { addMessageCreator, changeNewMessageCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addMessageCreator: () => {
            dispatch(addMessageCreator());
        },
        changeNewMessageCreator: (text) =>{
            dispatch(changeNewMessageCreator(text));
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;