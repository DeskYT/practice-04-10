import React, {Component} from 'react';
import {emitUser} from "../../api/api";
import {authUser} from "../../middleware/users";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    handleLoginInput = (e) => {
        this.setState({username: e.target.value})
    }
    handlePasswordInput = (e) => {
        this.setState({password: e.target.value})
    }
    handleAuthButton = () => {
        //const {username, password} = this.state;
        const username = "TestLogin";
        const password = "TestPass";
        try{
            authUser(username, password, this.props.loginCallBack);
        }
        catch (e) {
            console.log(e)
        }
    }
    render() {
        const {username, password} = this.state;
        return (
            <div>
                <input onChange={this.handleLoginInput} value={username} type="text"/>
                <input onChange={this.handlePasswordInput} value={password} type="password"/>
                <button onClick={this.handleAuthButton}>Auth</button>
            </div>
        );
    }
}

export default LoginForm;