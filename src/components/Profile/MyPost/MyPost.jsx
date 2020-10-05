import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    let postsArray =
        props.postsData.map(p => <Post likeCout={p.likeCout} dislikeCout={p.dislikeCout} date={p.date}
                                       message={p.message}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPostCreator();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChangeCreator(text);
    }
    return (
        <div className={s.posts}>
            <h3>My post</h3>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <div>
                <button onClick={addPost}>Добавить пост</button>
            </div>
            <div>
                {postsArray}
            </div>
        </div>
    )
}

export default MyPost;