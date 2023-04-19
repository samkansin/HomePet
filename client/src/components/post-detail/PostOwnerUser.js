import React from 'react';
import '../../CSS/PostOwnerUser.css';

const PostOwnerUser = (user) => {
  const verify = true;
  return (
    <div className='owner-user'>
      <div className='user-profile'>
        <img
          src='https://knightsmsk.github.io/HomePetResource/default%20img/profile_default.png'
          alt=''
        />
      </div>
      <div className='username-time'>
        <p className='name'>
          {user.name || 'User Full Name'}
          {verify && <i className='icon-verify'></i>}
        </p>
        <span className='time'>2d ago</span>
      </div>
    </div>
  );
};

export default PostOwnerUser;
