
const userActions = require("../controllers/user.controller");
const chatActions = require("../controllers/chat.controller");

module.exports.connectionHandler = (data, options) => {
    console.log("connectionHandler");
    console.log(data,options);
}

module.exports.testHandler = (data,options, testCB) => {
    //console.log("messageHandler");
    testCB("data from server");
}

module.exports.userHandler = (action, data, socket, response) => {
    action += 'User';
    if (!userActions.hasOwnProperty(action)) return;
    userActions[action](data, socket, response);
    //userActions.createUser({body:{username: "TestLogin", password: "TestPass", nickname: "testNickname"}}, socket);
}

module.exports.chatHandler = (action, data, socket, response) => {
    console.log("RESPONSE: ",response);
    console.log("chatHandler", action, data);
    console.log(socket.request.session.user)
    if (!chatActions.hasOwnProperty(action)) return;
    chatActions[action](data, socket, response);
}
