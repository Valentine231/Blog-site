import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import cors from 'cors';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: 'http://localhost:5173', // Allow requests from this origin
        methods: ['GET', 'POST'],
        credentials: true
    }
});

// Enable CORS for all origins
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST'], // Specify allowed methods
    credentials: true // Allow credentials if needed
}));

// Serve static files from the React app
app.use(express.static(path.join(process.cwd(), 'build')));

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('sendMessage', (data) => {
        io.emit('sendMessage', data); // Broadcast the new comment to all clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Serve the React app for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});