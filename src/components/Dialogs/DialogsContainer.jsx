import { addMessageCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRedirect} from "../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return{
        messagePage: state.messagePage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addMessageCreator: (newMessage) => {
            dispatch(addMessageCreator(newMessage));
        },
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRedirect
)(Dialogs);