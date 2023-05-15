import React from 'react';
import PostDetail from './PostDetail';

const PostTag = () => {
  return (
    <div className='post-list-hashtag'>
      <PostDetail />
    </div>
  );
};

export const LoaderPostByTag = async ({ params }) => {
  const { tag } = params;
  const response = await fetch(`/api/post/hashtag/${tag}`);
  let post = await response.json();
  if (!response.ok) {
    throw Error(post.error);
  }
  return post;
};

export default PostTag;
