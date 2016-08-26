import React, { Component } from 'react'
import Message from './Message.js';

export default class MessageList extends Component {

    static propTypes = {

    };
    constructor() {
        super();
        this.state = {
            messages: [
                'hi here , how are you ?',
                'I am fine , and you ?'
            ]
        }
    }

    render() {
        var messageNodes = this.state.messages.map( (item, id ) => {
            return(
                <div key={id}>
                    <Message msg={item} />
                </div>
            );
        });

        return (
            <div style={{color: "ok"}}>{messageNodes}</div>
        );
    }

}
