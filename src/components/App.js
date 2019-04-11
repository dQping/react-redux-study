import React, { Component } from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListcontainer from '../containers/TodoListContainer'
import FooterContainer from '../containers/FooterContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <AddTodoContainer />
                <TodoListcontainer />
                <FooterContainer />
            </div>
        )
    }
}

export default App
