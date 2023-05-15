import { Server } from 'socket.io';

const io = new Server(8080, {
  cors: {
    origin: 'http://localhost:3000',
  },
  transports: ['websocket', 'polling'],
});

let activeUsers = [];

io.on('connection', (socket) => {
  socket.on('new-user-add', (newUserId) => {
    if (!activeUsers.some((user) => user.uid === newUserId)) {
      activeUsers.push({ uid: newUserId, socketId: socket.id });
    }
    console.log('Connected Users', activeUsers);
    io.emit('get-users', activeUsers);
  });

  socket.on('send-message', (data) => {
    const { receiverId } = data;
    const user = activeUsers.find((user) => user.uid === receiverId);
    console.log('Sending form socket to : ', receiverId);
    console.log('Data', data);
    if (user) {
      io.to(user.socketId).emit('receive-message', data);
    }
  });

  socket.on('disconnect', () => {
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    console.log('User Disconnected', activeUsers);

    io.emit('get-users', activeUsers);
  });
});
