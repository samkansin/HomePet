import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PostOwnerUser from '../components/post-detail/PostOwnerUser';
import { displayAge } from '../components/PetCard';
import PostImgPet from '../components/post-detail/PostImgPet';
import '../CSS/PostDetail.css';
  
const PostDetail = () => {
  const postData = useLoaderData();
  return (
    <div className='post-detail-page'>
      <div className='pages-container'>
        <div className='page-title'>
          <span>Pet Details</span>
          <div className='more'>
            <div className='dot' />
            <div className='dot' />
            <div className='dot' />
          </div>
        </div>
        <div className='post-owner'>
          <PostOwnerUser timePost={postData.dateTime} />
          <Link to='/chat'>Chat</Link>
        </div>

        <div className='info-pet'>
          <div className='pet-name-breeds'>
            <span className='pet-name'>{postData.name}</span>
            <span> • </span>
            <span className='pet-breeds'>{postData.breed}</span>
          </div>
          <div className='pet-gender'>
            <span>{`Gender: ${postData.gender}`}</span>
          </div>
          <div className='pet-age'>
            <span>{`Age: ${displayAge(
              postData.ageYear,
              postData.ageMonth
            )}`}</span>
          </div>
        </div>
        <p className='content'>{postData.details}</p>
        <div className='post-topic'>
          {postData.topic.map((topic, key) => (
            <Link key={key} to={`/post/hashtag/${topic}`}>{`#${topic}`}</Link>
          ))}
        </div>

        <PostImgPet image={postData.image_src} />
      </div>
    </div>
  );
};

export default PostDetail;

export const LoadPostData = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`/api/pet/${id}`);
  let post = await response.json();
  if (!response.ok) {
    throw Error(post.error);
  }
  return post;
};
