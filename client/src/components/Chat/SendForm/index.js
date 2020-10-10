import React, {Component} from 'react';

class SendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }
    send = () => {
        const {sendMessage} = this.props;
        sendMessage(this.state.message);
    }
    handleInput = (e) => {
        this.setState({message: e.target.value})
    }
    render() {
        return (
            <div>
                <input onChange={this.handleInput} type="text" placeholder="Введите сообщение" value={this.state.message}/>
                <button onClick={this.send}>Send</button>
            </div>
        );
    }
}

export default SendForm;