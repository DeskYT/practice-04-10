import React, {Component} from 'react';
import {createChat} from "../../../middleware/chats";

class NewChatMenu extends Component {
    constructor(props){
        super(props);
        this.state = {chatName: ""}
    }
    handleInput = (e) => {
        this.setState({chatName: e.target.value})
    }
    handleButton = () => {
        try{
            createChat(this.state.chatName, this.props.chatCallBack);
        }
        catch (e) {
            console.log(e)
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.chatName} onChange={this.handleInput} placeholder="Название чата"/>
                <button onClick={this.handleButton}>Create</button>
            </div>
        );
    }
}

export default NewChatMenu;