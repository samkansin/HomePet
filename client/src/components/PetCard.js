import React from 'react';

import '../CSS/PetCard.css';

const BlogPostCard = (props) => {
  return (
    <div className='card-container'>
      <div className='pet-img'>
        <img
          alt={props.name}
          src={props.image_src}
          className='card-image'
        />
        <div className='bookmark'>
          <i className='icon-bookmark'></i>
        </div>
      </div>
      <div className='card-body'>
        <div className='card-age-gender-status'>
          <span className='age-gender'>{props.ageMonth} Months | {props.gender}</span>
          {props.status === 'Adopted' ? (
            <span className='status adopted'>{props.status}</span>
          ) : (
            <span className='status'>{props.status}</span>
          )}
        </div>
        <div className='card-name-breed'>
          <h1 className='pet-name'>{props.name}</h1>
          <span className='pet-breed'>{props.breed}</span>
        </div>
        <span className='pet-detail three-line-ellipsis'>{props.detail}</span>
        <div className='card-bottom'>
          <button className='card-button'>READ MORE</button>
          <div className='card-owner-time'>
            {/* <span className="pet-owner">{props.owner}</span> */}
            <span className='time'>{props.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
