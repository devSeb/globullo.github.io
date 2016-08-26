import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Dog extends Component {

    static propTypes = {

    };
    constructor() {
        super();
        this.state = {
            messages: ' Oh a dog !! '
        }
    }

    render() {
        console.log("dog");
        return (
            <div style={{color: "ok"}}>{this.state.messages}
             <Link to="/">Home</Link>
            </div>
        );
    }

}


