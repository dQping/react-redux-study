import React, { Component } from 'react'

export default class AddTodo extends Component {
    handleClick = () => {
        this.props.addTodoAction(this.props.text)
        this.props.setTodoTextAction('')
    }
    handleChange = e => {
        this.props.setTodoTextAction(e.target.value)
    }
    render() {
        return (
            <div>
                <input value={this.props.text} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}
