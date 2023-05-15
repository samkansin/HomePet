import PostOwnerUser from '../components/post-detail/PostOwnerUser';
import usePermission from '../hooks/usePermission';
import { useAuth } from '../utils/AuthProvider';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { displayAge } from '../components/PetCard';
import PostImgPet from '../components/post-detail/PostImgPet';
import '../CSS/PostDetail.css';
import { toast } from 'react-toastify';
import '../CSS/Modal.css';

const PostDetail = () => {
  const postData = useLoaderData();
  const navigate = useNavigate();
  let { hasPermission } = usePermission({ id: true });
  const auth = useAuth();
  const moreMenu = useRef();

  document.addEventListener('click', (e) => {
    if (moreMenu.current) {
      if (
        moreMenu.current.classList.contains('active') &&
        !moreMenu.current.contains(e.target)
      ) {
        moreMenu.current.classList.remove('active');
      }
    }
  });

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleDelete = async () => {
    if (deleteInput !== 'DELETE') {
      toastError(`Please type "DELETE" to delete the post!`);
      return;
    }

    try {
      const response = await fetch(`/api/pet/${postData.PetID}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      toastSuccess('Delete post successfully!');
      navigate('/adopt');
    } catch (error) {
      console.error(error);
    }
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  // user type DELETE to delete the post
  const [deleteInput, setDeleteInput] = useState('');

  const handleInputChange = (e) => {
    setDeleteInput(e.target.value);
  };

  useEffect(() => {
    let deleteBtn = document.querySelector('.delete');
    if (deleteInput === 'DELETE' && deleteBtn !== null) {
      deleteBtn.classList.add('active');
    } else if (deleteBtn !== null) {
      deleteBtn.classList.remove('active');
    }
  }, [deleteInput]);

  return (
    <div className='post-detail-page'>
      <div className='pages-container'>
        <div className='page-title'>
          <span>Pet Details</span>
          <div className='more' ref={moreMenu}>
            <div
              className='other'
              onClick={(e) => {
                e.currentTarget.parentNode.classList.toggle('active');
              }}
            >
              <div className='dot' />
              <div className='dot' />
              <div className='dot' />
            </div>
            <div
              className={`moreMenu ${
                hasPermission(postData?.owner?.uid) ? '' : 'menuPost'
              }`}
            >
              <ul className='moreMenuList'>
                {hasPermission(postData?.owner?.uid) ? (
                  <>
                    <li>
                      <Link to='#'>
                        <i className='icon-edit-post' />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i className='icon-delete-post' />
                        Delete
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to='#'>
                        <i className='icon-report-post' /> Report
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i className='icon-post-bookmark' /> Bookmark
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i className='icon-report-user' /> Report User
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className='post-owner'>
          <PostOwnerUser timePost={postData.dateTime} owner={postData.owner} />
          {auth?.user?.uid !== postData.owner.uid && (
            <Link
              to='#'
              onClick={() => {
                createChatRoom(postData.owner, auth.user, navigate);
              }}
            >
              Chat
            </Link>
          )}
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

        {modal && (
          <div className='modal'>
            <div onClick={toggleModal} className='overlay'></div>
            <div className='modal-content'>
              <div className='modal-upper'>
                <div className='modal-image'>
                  <img
                    src='https://cdn.pixabay.com/photo/2012/04/12/22/25/warning-sign-30915__340.png'
                    alt='alert'
                  />
                </div>
                <div className='modal-message'>
                  <h1>Delete post?</h1>
                  <p>
                    This post will be deleted and you won't be able to find it
                    anymore. This process <b>cannot</b> be undone.
                  </p>
                  <p>
                    Please type <b>"DELETE"</b> in the box below to confirm.
                  </p>
                  <div className='modal-input'>
                    <input
                      type='text'
                      placeholder='DELETE'
                      onChange={handleInputChange}
                      autoComplete='off'
                    />
                  </div>
                </div>
              </div>
              <div className='modal-button'>
                <button onClick={toggleModal} className='cancel'>
                  Cancel
                </button>
                <button onClick={handleDelete} className='delete'>
                  Delete
                </button>
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
  return post;
};

const createChatRoom = async (owner, user, navigate) => {
  if (user?.uid) {
    try {
      let res = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ senderId: user.uid, receiverId: owner.uid }),
      });
      if (res.ok) {
        const room = res.json();
        console.log(room);
        navigate('/chat');
      } else {
        console.log(res);
      }
    } catch (error) {}
  } else {
    navigate('/login', { replace: true });
  }
};

const DropdownMenu = [
  { icon: 'update', name: 'edit' },
  { icon: 'delete', name: 'delete' },
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
