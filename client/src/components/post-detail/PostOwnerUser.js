import React from 'react';
import '../../CSS/PostOwnerUser.css';
import { compareTime } from '../PetCard';

const PostOwnerUser = (user) => {
  const compare = compareTime(user.timePost);
  return (
    <div className='owner-user'>
      <div className='user-profile'>
        <img
          src={
            user?.owner.uid
              ? user.owner.profileImg
              : 'https://knightsmsk.github.io/HomePetResource/default%20img/profile_default.png'
          }
          alt=''
        />
      </div>
      <div className='username-time'>
        <p className='name'>
          {user.owner.displayName || 'User Full Name'}
          {user?.owner.verify && <i className='icon-verify'></i>}
        </p>
        <span className='time'>{`${compare.time} ${compare.unit}`}</span>
      </div>
    </div>
  );
};

export default PostOwnerUser;
