import React from 'react';
import { addPostCreator, onPostChangeCreator } from "../../../Redux/profile-reducer";
import StoreContext from '../../../StoreContext';
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostCreator());
            }
            let onPostChange = (text) => {
                let action = onPostChangeCreator(text);
                store.dispatch(action);
            }
            return <MyPost onPostChangeCreator={onPostChange} addPostCreator={addPost} postsData={state.profilePage.postsData}
                newPostText={state.profilePage.newPostText} />
        }
        }
    </StoreContext.Consumer>
}

export default MyPostContainer;