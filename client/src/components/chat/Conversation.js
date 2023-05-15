import React, { useEffect, useRef, useState } from 'react';
import useFetchPrivate from '../../hooks/useFetchPrivate';
import { Form } from 'react-router-dom';
import InputEmoji from 'react-input-emoji';
import { useAuth } from '../../utils/AuthProvider';
import ProfileUser from '../ProfileUser';
import '../../CSS/Conversation.css';

const Conversation = ({
  chat,
  currentUser,
  setSendMessage,
  receiveMessage,
  online,
}) => {
  const [userData, setUserData] = useState(null);
  const { callFetch } = useFetchPrivate();
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState('');
  const scroll = useRef();

  const auth = useAuth();

  const userConOwner = useRef();
  const userCon = useRef();

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      const { response, data } = await callFetch(`/api/user/wid/${userId}`);
      if (response.ok) {
        setUserData(data);
      }
    };
    try {
      if (chat) getUserData();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [chat, currentUser]);

  useEffect(() => {
    const fetchMessage = async () => {
      const data = await getMessages(chat._id);
      if (data) setMessages(data);
    };
    fetchMessage();
  }, [chat]);

  const handleChange = (newMessage) => {
    setNewMessages(newMessage);
  };

  const handleSend = async (e) => {
    if (newMessages) {
      const message = {
        senderID: currentUser,
        message: newMessages,
        chatID: chat._id,
      };
      const receiverId = chat.members.find((id) => id !== currentUser);
      setSendMessage({ ...message, receiverId });

      try {
        const data = await addMessage(message);
        setMessages([...messages, data]);
        setNewMessages('');
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatID === chat._id) {
      setMessages([...messages, receiveMessage]);
    }
  }, [receiveMessage]);

  useEffect(() => {
    const btnIcon = document.querySelector('.react-input-emoji--button');
    const icon = document.createElement('i');
    icon.classList.add('icon-dog');
    if (btnIcon.children.length === 1) {
      btnIcon.appendChild(icon);
    }
  }, [auth.user]);

  useEffect(() => {
    if (scroll.current) scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='chat-conversation'>
      <div className='chat-header'>
        <ProfileUser profile={userData?.profileImg} online={online} />
        <p>Conversation with</p>
        <div className='chat-name'>
          <p className='name'>{userData?.displayName}</p>
          {userData?.verify && (
            <div className='verify'>
              <i className='icon-verify'></i>
            </div>
          )}
        </div>
      </div>
      <div className='chat-body'>
        <div className='noti-user'>
          <p>
            {userData?.verify
              ? 'This person has been verified as a real individual.'
              : 'You are chatting with an unverified individual. Please exercise caution.'}
          </p>
          <p
            className='icon-delete'
            onClick={(e) => {
              let noti = e.currentTarget.parentNode;
              noti.classList.add('remove');
              setTimeout(() => {
                noti.remove();
              }, 510);
            }}
          ></p>
        </div>

        <div className='chat-content'>
          {messages.map((message, index) => (
            <div
              key={`msg-${index}`}
              className={`message ${
                message?.senderID === currentUser ? 'owner' : ''
              }`}
              ref={scroll}
            >
              {message?.senderID !== currentUser ? (
                <div className='coop'>
                  <ProfileUser profile={userData?.profileImg} online={online} />
                  <p className='name'>{userData?.displayName}</p>
                  <p className='time'>
                    {new Date(message?.createdAt).toLocaleString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    })}
                  </p>
                </div>
              ) : (
                <p className='time'>
                  {new Date(message?.createdAt).toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  })}
                </p>
              )}
              <p className='message-text'>{message?.message}</p>
            </div>
          ))}
        </div>
        <div className='chat-sender'>
          <Form className='chat-input-box'>
            <div className='add-post'>
              <i className='icon-add-post'></i>
            </div>
            <InputEmoji
              value={newMessages}
              onChange={handleChange}
              onEnter={handleSend}
              theme='light'
            />
            <button
              onClick={handleSend}
              aria-label='send message'
              type='submit'
              className='send-post'
            >
              <i className='icon-icon-send'></i>
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Conversation;

export const getMessages = async (id) => {
  try {
    let res = await fetch(`/message/${id}`);
    if (res.ok) {
      const message = await res.json();
      return message;
    }
  } catch (error) {
    console.log(error);
  }
};

const addMessage = async (message) => {
  try {
    let res = await fetch(`/message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {}
};
