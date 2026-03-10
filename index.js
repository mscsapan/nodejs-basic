// import express from 'express';
// import profileRoutes from './routes/profile-routes.js';

// const app = express();

// app.set('view engine', 'ejs')

// app.use(profileRoutes);


// app.listen(3000, () => {
//     console.log(`Server is running with 3000 port`);
// });


import express from 'express';
import profileRoutes from './routes/profile-routes.js';
import http from 'http';
import { Server } from 'socket.io';

const app = express();

// 1. Create an HTTP server and pass your Express app to it
const server = http.createServer(app);

// 2. Initialize Socket.io and attach it to the HTTP server
const io = new Server(server);

app.set('view engine', 'ejs');

app.use(profileRoutes);

// 3. Set up the WebSocket logic
io.on('connection', (socket) => {
    console.log('A user connected with ID:', socket.id);

    // Listen for a message from this user
    socket.on('send_message', (data) => {
        console.log('Message received on server:', data);

        // Broadcast the message to all OTHER connected users
        socket.broadcast.emit('receive_message', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// 4. CRITICAL FIX: Listen on the 'server', not the 'app'
server.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});