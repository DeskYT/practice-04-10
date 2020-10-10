const mongoose = require('mongoose');
const connection = require('./../db');
/*autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(connection);*/

const Schema = mongoose.Schema;
const chatSchema = new Schema({
    chatId: mongoose.Schema.ObjectId,
    chatOwner: {
        type: mongoose.Schema.ObjectId,
        required: true;
    },
    chatName: {
        type: String
    },
    messages: {
        type: [{
            messageLocalId: {
                type: mongoose.Schema.ObjectId,
                default: new mongoose.mongo.ObjectId()
            },
            senderId: {
                type: mongoose.Schema.ObjectId,
            },
            sendTime: {
                type: Date,
                default: Date.now
            },
            messageContent: {
                type: String,
            },
            messageStatus: {
                type: Boolean,
                default: false
            }
        }],
        default: []
    }
}, { timestamps: true });

//chatSchema.plugin(autoIncrement.plugin, { model: 'Chat', field: 'messages[{messageLocalId}]' });

chatSchema.methods.getLastMessage =() =>{
    const chat = this;
    return Chat.find({_id: chat._id},{messages: {'$slice': -1}});
}

const Chat = connection.model('Chat',chatSchema);

module.exports = Chat;