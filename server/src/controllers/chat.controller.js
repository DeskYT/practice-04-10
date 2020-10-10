const Chat = require('./../models/chat.model');
const User = require('./../models/user.model');

const create = async(data, socket, response) => {
    try{
        console.log('ok')
        const chat = new Chat(data);
        const newChat = await chat.save();
        console.log(newChat);
        await sendMessage({chatId: newChat._id, message: "message"}, socket, (res) => console.log())
        return response(newChat);
    } catch(e){console.log(e)}
};
module.exports.create = create;
const update = async({id, body}, response) => {
    try{
        const updateChat = await Chat.findByIdAndUpdate(id, {...body, messages: []})
        if(updateChat) return updateChat;
        response({})
    } catch(e){console.log(e)}
};
module.exports.update = update;

const sendMessage = async({body: {chatId, message}}, socket, response) => {
    const sender = socket.request.session.user;
    try{
        User.findById(sender._id, {pairs: 1}, (err, userPairs) => {
            if (err) return console.log(err);
            if(!userPairs) {
                console.log("Пользователь не существует");
                return response({success: false, err: "Пользователь не существует"});
            }
            if(userPairs.contains(chatId)){
                Chat.findById(chatId, {messages: 1}, (err, data, response) => {
                    if(!data) {
                        console.log("Чат не существует");
                        return response({success: false, err: "Чат не существует"});
                    }
                    data.push(message);
                    //Chat.findByIdAndUpdate(chatId, {$set: {messages: data}})
                    const addedMsg = updateChat(chatId, {$set: {messages: data}});
                    response(addedMsg);
                })
            }
            return response({success: false, err: "Access Denied"});
        });
    } catch(e){console.log(e)}
    console.log(sender, chatId, message)
};
module.exports.sendMessage = sendMessage;

module.exports.getAllMessages = async({chatId}, socket, response) => {
    try{
        const userId = socket.request.session.user._id;
        User.findById(userId, {pairs: 1}, (err, userPairs) => {
            if (err) return console.log(err);
            if(!userPairs) {
                console.log("Пользователь не существует");
                return response({success: false, err: "Пользователь не существует"});
            }
            if(userPairs.contains(chatId)){
                Chat.findById(chatId, {messages: 1}, (err, messages, response) => {
                    if (err) return console.log(err);
                    if(!messages) {
                        console.log("Чат не существует");
                        return response({success: false, err: "Чат не существует"});
                    }
                    messages = messages.map(it=>{
                        const msgSender = it.senderId;
                        User.findById(msgSender, {nickname: 1},(err, user)=>{
                            it.senderNickname = user ? user.nickname : "Deleted";
                        });
                        return it;
                    });
                    return response({success: true, messages});
                });
            }
            return response({success: false, err: "Access Denied"});
        });
    } catch(e){console.log(e)}
}

module.exports.getChatsList = async({}, socket, response) => {
    console.log("RESPONSE: ",response);
    try{
        const userId = socket.request.session.user._id;
        User.findById(userId, {pairs: 1}, (err, userPairs) => {
            console.log("Pairs: ", userPairs);
            if (err) return console.log(err);
            if(!userPairs) {
                console.log("Пользователь не существует");
                return response({success: false, err: "Пользователь не существует"});
            }
            userPairs.pairs.forEach(it=>{
               Chat.findById(it, (err, userChats) => {
                   if (err) return console.log(err);
                   if(!userChats) {
                       console.log("У пользователя нет чатов.");
                       return response({success: false, err: "У пользователя нет чатов."});
                   }
                   return response({success: true, userChats});
               });
            });
            return response({success: false, err: "У пользователя нет чатов."});
        });
    } catch(e){console.log(e)}
}

module.exports.getNewMessages = async(userId, chatId, socket, response) => {

}