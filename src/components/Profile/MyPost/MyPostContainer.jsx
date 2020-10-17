import { addPostCreator, onPostChangeCreator } from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let MyPostContainer = connect(mapStateToProps,{onPostChangeCreator,addPostCreator})(MyPost);
export default MyPostContainer;