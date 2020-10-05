import React from 'react';
import {addPostCreator, onPostChangeCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }
    let onPostChange = (text) => {
        let action = onPostChangeCreator(text);
        props.store.dispatch(action);
    }
    return <MyPost onPostChangeCreator={onPostChange} addPostCreator={addPost} postsData={state.profilePage.postsData}
                   newPostText={state.profilePage.newPostText}/>
}

export default MyPostContainer;