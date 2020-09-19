import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPost = (props) => {
debugger;
    let postsArray = 
        props.postsData.map(p => <Post likeCout={p.likeCout} dislikeCout={p.dislikeCout} date={p.date} message={p.message}/>);
    let newPostElement = React.createRef();
    
    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addElement(text);
    }

    return (
        <div className={s.posts}>
            <h3>My post</h3>
            <textarea ref={newPostElement}></textarea>
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