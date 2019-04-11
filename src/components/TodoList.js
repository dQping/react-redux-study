import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodosAction()
    }

    render() {
        const { todos, toggleTodoAction } = this.props
        return (
            <ul>
                {todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            {...todo}
                            onClick={() => {
                                toggleTodoAction(todo.id)
                            }}
                        />
                    )
                })}
            </ul>
        )
    }
}
