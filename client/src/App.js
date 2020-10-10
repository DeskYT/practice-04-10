import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm";

import React, {Component} from 'react';
import {emitUser} from "./api/api";
import {authUser} from "./middleware/users";
import Chat from "./components/Chat";
import ChatsList from "./components/ChatsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      err: null,
      currentChat: null
    }
  }
  handleLogin = (auth) => {

    this.setState({
      isLogged: auth.isLogged,
      err: auth.err ? auth.err : null
    })
  }
  handleChat = (newChat) => {
    this.setState({currentChat: newChat});
  }
  render() {
    const {isLogged, currentChat} = this.state;
    if(!isLogged) return (<LoginForm loginCallBack={this.handleLogin}/>);
    if(!currentChat) return(<ChatsList chatCallBack={this.handleChat}/>);
    return(<Chat chat={currentChat} />);
  }
}


export default App;
