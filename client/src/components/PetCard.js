import React from 'react';

import '../CSS/PetCard.css';

const compareTime = (time) => {
  if (time !== undefined) {
    const datePart = time.split(', ');
    var date = datePart[0].split('/');
    var timepart = datePart[1].split(':');
    date = date.map((num) => {
      return parseInt(num);
    });
    var timepart = timepart.map((num) => {
      return parseInt(num);
    });
    const lastestDate = new Date(
      date[2],
      date[0] - 1,
      date[1],
      timepart[0],
      timepart[1],
      timepart[2]
    );
    const currentDate = new Date();
    const diffTime =
      Math.abs(lastestDate.getTime() - currentDate.getTime()) / 1000;

    const diffMonth =
      currentDate.getMonth() +
      12 * currentDate.getFullYear() -
      (lastestDate.getMonth() + 12 * lastestDate.getFullYear());
    const diffYear = currentDate.getFullYear() - lastestDate.getFullYear();

    if (diffTime >= 0 && diffTime < 60) {
      return { unit: 'seconds ago', time: Math.floor(diffTime) };
    } else if (diffTime >= 60 && diffTime < 3600) {
      return { unit: 'mins ago', time: Math.floor(diffTime / 60) };
    } else if (diffTime >= 3600 && diffTime <= 86400) {
      return { unit: 'hours ago', time: Math.floor(diffTime / (60 * 60)) };
    } else if (diffTime >= 86400 && diffTime <= 31556926) {
      return { unit: 'days ago', time: Math.floor(diffTime / (60 * 60 * 24)) };
    } else if (diffMonth >= 1 && diffMonth <= 12) {
      return { unit: 'months ago', time: diffMonth };
    } else if (diffYear >= 1 && diffYear <= 12) {
      return { unit: 'years ago', time: diffYear };
    }
  } else {
    return { unit: 'NAN', time: 'NAN' };
  }
};

const BlogPostCard = (props) => {
  const compare = compareTime(props.dateTime);
  return (
    <div className='card-container'>
      <div className='pet-img'>
        <img alt={props.name} src={props.image_src} className='card-image' />
        <div className='bookmark'>
          <i className='icon-bookmark'></i>
        </div>
      </div>
      <div className='card-body'>
        <div className='card-age-gender-status'>
          <span className='age-gender'>
            {props.ageMonth} Months | {props.gender}
          </span>
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
        <span className='pet-detail one-line-ellipsis'>{props.detail}</span>
        <div className='card-bottom'>
          <button className='card-button'>READ MORE</button>
          <div className='card-owner-time'>
            {/* <span className="pet-owner">{props.owner}</span> */}
            <span className='time'>{`${compare.time} ${compare.unit}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
