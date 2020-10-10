const {connectionHandler, userHandler, chatHandler, testHandler} = require("./eventHandlers");

const userActions = require("../controllers/user.controller");

module.exports = function connection(socket) {
    //socket.request.session
    console.log((socket.id).toString().substr(0, 5));
    const ID = (socket.id).toString().substr(0, 5);
    const time = (new Date).toLocaleTimeString();
    socket.broadcast.json.send({'event': 'userJoined', 'name': ID, 'time': time});
    socket.broadcast.emit("userJoined", {name: ID, time: time});
    socket.on('connection', connectionHandler);
    socket.on('test', testHandler);
    socket.on('user', (action, data, handler) => userHandler(action, data, socket, handler));

    if (socket.request.session){
        socket.on('chat', (action, data, handler) => chatHandler(action, data, socket, handler));
    }
}