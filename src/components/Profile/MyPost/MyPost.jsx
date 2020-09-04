import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

let postsData = [
    {likeCout:"57", dislikeCout:"12", date:"31.08.2020", message:"Наконец я начал учить реакт"},
    {likeCout:"10432", dislikeCout:"1", date:"22.06.2000", message:"Толя кусок тупого дерьма"}
];
let postsArray = postsData.map(p => <Post likeCout={p.likeCout} dislikeCout={p.dislikeCout} date={p.date} message={p.message}/>);
const MyPost = () => {
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