import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Cat extends Component {

    static propTypes = {

    };
    constructor() {
        super();
        this.state = {
            messages: ' Oh a cat !! '
        }
    }

    render() {
        console.log("cat");
        return (
            <div style={{color: "ok"}}>{this.state.messages}
                <Link to="/">Home</Link>
            </div>
        );
    }

}
