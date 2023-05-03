import { Link } from 'react-router-dom';
import '../CSS/PetCard.css';

export const compareTime = (time) => {
  if (time !== undefined) {
    const lastestDate = new Date(time);
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
    } else if (diffTime >= 86400 && diffMonth <= 0) {
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

export const displayAge = (year, month) => {
  if (year > 0 && month > 0) {
    return `${year}.${month} Years`;
  } else if (year > 0 && month === 0) {
    return `${year} Years`;
  } else if (month > 0 && year === 0) {
    return `${month} Months`;
  }
};

const BlogPostCard = (props) => {
  const compare = compareTime(props.dateTime);
  let status = props.adopted ? 'adopted' : 'available';
  return (
    <div className='card-container'>
      <div className='pet-img'>
        <img alt={props.name} src={props.image_src[0]} className='card-image' />
        <div className='bookmark'>
          <i className='icon-bookmark'></i>
        </div>
      </div>
      <div className='card-body'>
        <div className='card-age-gender-status'>
          <span className='age-gender'>
            {displayAge(props.ageYear, props.ageMonth)} | {props.gender}
          </span>
          {status && <span className={`status ${status}`}>{status}</span>}
        </div>
        <div className='card-name-breed'>
          <h1 className='pet-name'>{props.name}</h1>
          <span className='pet-breed'>{props.breed}</span>
        </div>
        <span className='pet-detail one-line-ellipsis'>{props.detail}</span>
        <div className='card-bottom'>
          <Link to={`/post/${props.id}`} className='card-button'>
            READ MORE
          </Link>
          <div className='card-owner-time'>
            <span className='time'>{`${compare.time} ${compare.unit}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
