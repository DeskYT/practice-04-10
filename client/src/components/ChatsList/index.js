import React, {Component} from 'react';
import {getChatsList} from "../../middleware/chats";
import NewChatMenu from "./NewChatMenu";

class ChatsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatsList: []
        }
        this.fetchChats();
    }
    fetchChats = () => {
        getChatsList((res)=>{
            console.log("Chat fetcher: ", res);
        });
    }
    render() {
        const chats = this.state.chatsList.map(it=>{
            return(
                <li key={it._id}>
                    <h3>{it.chatName}</h3>
                </li>
            );
        });
        return (
            <>
                <button>New Chat</button>
                <NewChatMenu chatCallBack={this.props.chatCallBack} />
                <ul>
                    {chats}
                </ul>
            </>
        );
    }
}

export default ChatsList;