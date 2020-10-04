const {connectionHandler} = require('./eventHandlers');
module.exports = function connection(socket) {
    socket.on('connection', connectionHandler)
}