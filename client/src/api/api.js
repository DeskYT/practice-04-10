import socket from './index';
export const emitTest = (data, options) => socket.emit('test',data,options, testCB);
//export const emitMessage = (room, sender, message) => socket.emit('message', room, sender, message);
export const emitUser = (action, data, handler) => {
    socket.emit('user', action, data, handler)
};
export const emitChat = (action, data, handler) => {
    socket.emit('chat', action, data, handler)
};

const testCB = (data) => {
    console.log("It is working: ", data);
}

emitTest("testdata", "testoptions");