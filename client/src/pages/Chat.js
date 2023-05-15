import { useEffect, useRef, useState } from 'react';
import Conversation from '../components/chat/Conversation';
import ChatComponent from '../components/chat/ChatComponent';
import { useAuth } from '../utils/AuthProvider';
import useSyncState from '../hooks/useSynState';
import { io } from 'socket.io-client';
import '../CSS/Chat.css';

const Chat = () => {
  const auth = useAuth();
  const [chats, setChats] = useState([]);
  // const [currentChat, setCurrentChat] = useState(chats[0]);
  const [onlineUser, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const receive = useSyncState(null);
  const Chats = useSyncState([]);
  const current = useSyncState([]);

  const socket = useRef();

  //send message to socket
  useEffect(() => {
    if (sendMessage) {
      socket.current.emit('send-message', sendMessage);
    }
  }, [sendMessage]);


  useEffect(() => {
    socket.current = io('http://localhost:8080');
    socket.current.emit('new-user-add', auth.user.uid);
    socket.current.on('get-users', (users) => {
      setOnlineUsers(users);
    });
  }, [auth.user]);

  //receive message from socket
  useEffect(() => {
    socket.current.on('receive-message', async (data) => {
      receive.set({
        ...data,
        createdAt: new Date(),
      });
      if (Chats.get()) {
        if (data) {
          const update = async () => {
            let status = await updateTimeChat(data.chatID);
          };

          await update();
        }
        getChats(Chats, auth.user.uid, current);

        // if (!chats.some((chat) => chat._id === data.chatID)) {
        //   getChats(setChats, auth.user.uid);
        // }
      }
    });
  }, []);

  useEffect(() => {
    getChats(Chats, auth.user.uid, current);
  }, [auth.user.uid]); //auth.user.uid

  const checkOnlineStatus = (chat) => {
    const chatMembers = chat.members.find((member) => member !== auth.user.uid);
    const online = onlineUser.find((user) => user.uid === chatMembers);
    return online ? true : false;
  };

  return (
    <div className='chat-container'>
      <div className='chat-left-side'>
        <div
          className='menu pinned-chat'
          onMouseOver={(e) =>
            handleHover(
              '.chat-container .chat-left-side .menu.active[use="true"]',
              e.currentTarget,
              e
            )
          }
          onMouseOut={(e) =>
            handleHover(
              '.chat-container .chat-left-side .menu.active[use="true"]',
              e.currentTarget,
              e
            )
          }
        >
          <i className='icon-pinned'></i>
          <span>Pinned</span>
          <span className='length'>2</span>
        </div>
        <div
          className='menu all-chat active'
          use='true'
          onMouseOver={(e) =>
            handleHover(
              '.chat-container .chat-left-side .menu.active[use="true"]',
              e.currentTarget,
              e
            )
          }
          onMouseOut={(e) =>
            handleHover(
              '.chat-container .chat-left-side .menu.active[use="true"]',
              e.currentTarget,
              e
            )
          }
        >
          <i className='icon-all'></i>
          <span>All</span>
          <span className='length'>3</span>
        </div>
      </div>

      <div className='chat-right-side'>
        <div className='chat-list'>
          <ul className='list'>
            <li className='search'>
              <i className='icon-search'></i>
              <input type='text' placeholder='Search...' />
            </li>
            {Chats.get().map((chat, index) => (
              <li
                use={checkCurrent(chat, current, index) ? 'true' : ''}
                key={`chat-${index}`}
                className={`chat-room ${
                  checkCurrent(chat, current, index) ? 'active' : ''
                }`}
                onClick={(e) => {
                  current.set(chat);
                  const chatActive = document.querySelector(
                    '.chat-container .chat-right-side .chat-room.active[use="true"]'
                  );
                  if (e.currentTarget !== chatActive) {
                    e.currentTarget.setAttribute('use', 'true');
                    e.currentTarget.classList.add('active');
                    chatActive.classList.remove('active');
                    chatActive.removeAttribute('use');
                    chatActive.classList.remove('hidden');
                  }
                }}
                onMouseOver={(e) => {
                  handleHover(
                    '.chat-container .chat-right-side .chat-room.active[use="true"]',
                    e.currentTarget,
                    e
                  );
                }}
                onMouseOut={(e) => {
                  handleHover(
                    '.chat-container .chat-right-side .chat-room.active[use="true"]',
                    e.currentTarget,
                    e
                  );
                }}
              >
                <ChatComponent
                  chat={chat}
                  currentUser={auth.user.uid}
                  online={checkOnlineStatus(chat)}
                />
              </li>
            ))}
          </ul>
        </div>
        {Chats.get().length !== 0 && (
          <Conversation
            chat={current.get()}
            currentUser={auth.user.uid}
            setSendMessage={setSendMessage}
            receiveMessage={receive.get()}
            online={checkOnlineStatus(current.get())}
          />
        )}
      </div>
    </div>
  );
};

export default Chat;

const checkCurrent = (chats, current, index) => {
  if (current.get().members) {
    return (
      JSON.stringify(chats.members) === JSON.stringify(current.get().members)
    );
  } else {
    return index === 0;
  }
};

const handleHover = (mainActive, element, event) => {
  const activeHidden = document.querySelector(mainActive);

  if (activeHidden.classList.contains('hidden')) {
    activeHidden.classList.remove('hidden');
  }

  if (event._reactName === 'onMouseOver') {
    if (!element.classList.contains('active')) {
      element.classList.add('active');
      activeHidden.classList.add('hidden');
    }
  } else {
    if (element != activeHidden && element.classList.contains('active')) {
      element.classList.remove('active');
    } else if (activeHidden.classList.contains('hidden')) {
      activeHidden.classList.remove('hidden');
    }
  }
};

const userChats = async (id) => {
  try {
    let res = await fetch(`/chat/${id}`);
    if (res.ok) {
      const chats = await res.json();
      return chats;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateTimeChat = async (id) => {
  try {
    let res = await fetch(`/chat/${id}`, {
      method: 'PUT',
    });
    if (res.ok) {
      const chat = await res.json();
    }
  } catch (error) {
    console.log(error);
  }
};

const getChats = async (setChats, uid, current) => {
  const data = await userChats(uid);
  if (data) {
    setChats.set(data);
    if (current.get().length === 0) current.set(data[0]);
  }
};
