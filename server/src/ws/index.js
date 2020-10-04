const {connectionHandler, messageHandler} = require("./eventHandlers");
module.exports = function connection(socket) {
    socket.on('connection', connectionHandler);
    socket.on('message', messageHandler);
}