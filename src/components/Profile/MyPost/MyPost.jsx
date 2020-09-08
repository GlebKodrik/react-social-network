import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPost = (props) => {

    let postsArray = 
        props.postsData.map(p => <Post likeCout={p.likeCout} dislikeCout={p.dislikeCout} date={p.date} message={p.message}/>);

    return (
        <div className={s.posts}>
            <h3>My post</h3>
            <textarea></textarea>
            <div>
                <button>Добавить пост</button>
            </div>
            <div>
                New post
            </div>
            <div>
                {postsArray}
            </div>
        </div>
    )
}

export default MyPost;