import { addPostCreator, onPostChangeCreator } from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        onPostChangeCreator: (text) => {
            let action = onPostChangeCreator(text);
            dispatch(action);
        },
        addPostCreator: (text) =>{
            dispatch(addPostCreator());
        }
    }
}
let MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);
export default MyPostContainer;