import { useEffect, useState } from 'react';
import ProfileUser from '../ProfileUser';
import { getMessages } from './Conversation';
import useFetchPrivate from '../../hooks/useFetchPrivate';

const ChatComponent = ({ chat, currentUser, online }) => {
  const [userData, setUserData] = useState(null);
  const { callFetch } = useFetchPrivate();
  const [currentMessage, setCurrentMessage] = useState(null);

  useEffect(() => {
    const userId = chat.members.find((id) => id !== currentUser);

    const getUserData = async () => {
      const { response, data } = await callFetch(`/api/user/wid/${userId}`);
      if (response.ok) {
        setUserData(data);
      }
    };

    try {
      getUserData();
    } catch (error) {
      console.error(error);
      throw error;
    }

    const fetchMessage = async () => {
      const data = await getMessages(chat._id);
      if (data) setCurrentMessage(data[data.length - 1]);
    };
    fetchMessage();
  }, [chat, currentUser, callFetch]);

  return (
    <>
      <ProfileUser profile={userData?.profileImg} online={online} />
      <div className='conver'>
        <div className='name-time'>
          <p className='name'>
            {userData?.displayName}
            {userData?.verify && <i className='icon-verify'></i>}
          </p>
          <p className='time'>
            {currentMessage
              ? new Date(currentMessage.updatedAt).toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })
              : ''}
          </p>
        </div>
        <p className='message'>
          {currentMessage ? currentMessage.message : ''}
        </p>
      </div>
    </>
  );
};

export default ChatComponent;
