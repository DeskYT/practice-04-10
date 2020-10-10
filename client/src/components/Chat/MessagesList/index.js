import React, {Component} from 'react';
import styles from "./MessagesList.module.scss";

class MessagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          messages: []
        };
    }
    componentDidMount() {
        let intervalId = setInterval(this.timer, 1000);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }
    getNewMessages = () => {
        return ["test", "something"];
    }


    timer = () => {
        // setState method is used to update the state
        this.setState({ messages: this.getNewMessages()})
    }

    render() {
        return (
            <div>
                {this.state.messages.map(it=><div>
                    {it}
                </div>)}
            </div>
        );
    }
}

export default MessagesList;