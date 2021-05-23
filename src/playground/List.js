import React, { Component } from "react";
import ReactDOM from "react-dom";

class List extends Component {
    render() {
        const tasks = ['this me', 'my world', 'top ranking']
        return(
            <ol>
            {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ol>
        )
    }
}

export default List;