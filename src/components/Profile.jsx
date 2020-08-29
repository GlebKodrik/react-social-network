import React from 'react';
import theme from '../img/theme.jpg';

const Profile = () => {
    return <div className='content'>
        <div><img src={theme} alt="Тема" /></div>
        <div>ava + descrip</div>
        <div>
            My post
            <div>
                New post
            </div>
            <div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;