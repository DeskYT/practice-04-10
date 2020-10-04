module.exports.connectionHandler = (data, options) => {
    console.log("connectionHandler");
    console.log(data,options);
}
module.exports.messageHandler = (room, message) => {
    console.log("messageHandler");
    console.log("Message", message);
}