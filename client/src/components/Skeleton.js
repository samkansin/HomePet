import React from 'react';
import '../CSS/Skeleton.css';

const Skeleton = (props) => {
  const COUNTER = parseInt(props.num);
  const CardSkeleton = () => (
    <div className='skeleton card-container'>
      <div className='skeleton pet-img'>
        <div className='skeleton card-image'></div>
      </div>
      <div className='skeleton card-body'>
        <div className='skeleton card-age-gender-status'>
          <div className='skeleton-age-gender skeleton-text'></div>
          <div className='skeleton-status skeleton-text'></div>
        </div>
        <div className='skeleton card-name-breed'>
          <div className='skeleton-pet-name skeleton-text'></div>
          <div className='skeleton-pet-breed skeleton-text'></div>
        </div>
        <div className='skeleton-pet-detail skeleton-text'></div>
        <div className='skeleton card-bottom'>
          <div className='skeleton card-button'></div>
          <div className='skeleton-card-owner-time skeleton-text'></div>
        </div>
      </div>
    </div>
  );

  return Array(COUNTER)
    .fill(<CardSkeleton />)
    .map((item, index) => {
      return React.cloneElement(item, { key: index });
    });
};

export default Skeleton;
