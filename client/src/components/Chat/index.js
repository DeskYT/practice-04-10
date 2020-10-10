import React, {Component} from 'react';
import MessagesList from "./MessagesList";
import SendForm from "./SendForm";
import styles from "./Chat.module.scss"

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        //Test data
        this.data = {}; //Test data
        this.data.chatId = 1;

    }
    sendMessage = (msg) => {
        const {chatId, userId} = this.data; //this.props;
        //emitMessage(chatId, msg);
    }
    render() {
        return (
            <div>
                <MessagesList />
                <SendForm sendMessage={this.sendMessage}/>
            </div>
        );
    }
}

export default Chat;