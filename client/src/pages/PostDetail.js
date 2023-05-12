import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PostOwnerUser from '../components/post-detail/PostOwnerUser';
import { displayAge } from '../components/PetCard';
import PostImgPet from '../components/post-detail/PostImgPet';
import usePermission from '../hooks/usePermission';
import ROLES_LIST from '../utils/rolesList';
import '../CSS/PostDetail.css';

import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PostOwnerUser from "../components/post-detail/PostOwnerUser";
import { displayAge } from "../components/PetCard";
import PostImgPet from "../components/post-detail/PostImgPet";
import "../CSS/PostDetail.css";
import { toast } from "react-toastify";
import "../CSS/Modal.css";

const PostDetail = () => {
  const postData = useLoaderData();
  let { hasPermission } = usePermission();

  return (
    <div className="post-detail-page">
      <div className="pages-container">
        <div className="page-title">
          <span>Pet Details</span>
          <div className='more'>
            <div className='dot' />
            <div className='dot' />
            <div className='dot' />
            {hasPermission([ROLES_LIST.Admin, ROLES_LIST.Editor]) && (
              <>
                <div className='moreMenu'>
                  <ul className='moreMenuList'>
                    <li></li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="post-owner">
          <PostOwnerUser timePost={postData.dateTime} />
          <Link to="/chat">Chat</Link>
        </div>

        <div className="info-pet">
          <div className="pet-name-breeds">
            <span className="pet-name">{postData.name}</span>
            <span> • </span>
            <span className="pet-breeds">{postData.breed}</span>
          </div>
          <div className="pet-gender">
            <span>{`Gender: ${postData.gender}`}</span>
          </div>
          <div className="pet-age">
            <span>{`Age: ${displayAge(
              postData.ageYear,
              postData.ageMonth
            )}`}</span>
          </div>
        </div>
        <p className="content">{postData.details}</p>
        <div className="post-topic">
          {postData.topic.map((topic, key) => (
            <Link key={key} to={`/post/hashtag/${topic}`}>{`#${topic}`}</Link>
          ))}
        </div>

        <PostImgPet image={postData.image_src} />

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <div className="modal-upper">
                <div className="modal-image">
                  <img src="https://cdn.pixabay.com/photo/2012/04/12/22/25/warning-sign-30915__340.png" alt="alert" />
                </div>
                <div className="modal-message">
                  <h1>Delete post?</h1>
                  <p>
                    This post will be deleted and you won't be able to find it anymore. This process <b>cannot</b> be undone.
                  </p>
                  <p>
                    Please type <b>"DELETE"</b> in the box below to confirm.
                  </p>
                  <div className="modal-input">
                    <input type="text" placeholder="DELETE" onChange={handleInputChange} autoComplete="off" />
                  </div>
                </div>
              </div>
              <div className="modal-button">
                <button onClick={toggleModal} className="cancel">Cancel</button>
                <button onClick={handleDelete} className="delete">Delete</button>
              </div>
              <i className='icon-close close-modal' onClick={toggleModal}></i>
            </div>
          </div>
        )}
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
  const res = await fetch('/api/topic');
  if (!res.ok) {
    throw Error('Could not fetch topic');
  }
  let AllTopic = await res.json();
  return { post, AllTopic };
};

const DropdownMenu = [
  { icon: "update", name: "edit" },
  { icon: "delete", name: "delete" },
];

const toastSuccess = (message) => {
  toast.success(message, {
    position: 'top-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

const toastError = (message) => {
  toast.error(message, {
    position: 'top-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};