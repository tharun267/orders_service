const socketIO = require('socket.io');

module.exports = (app, server) => {
    const io = socketIO(server, {
        cors: {
            origin: '*',
        }
    });
    // console.log(server)
    io.on('connection', (socket) => {
        console.log('Client connected');
        socket.on('disconnect', () => console.log('Client disconnected'));
    });
    app.use((req, res, next) => {
        req.io = io;
        next();
    });
};

