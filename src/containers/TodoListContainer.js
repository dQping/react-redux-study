import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodoAction, fetchTodosAction } from '../action'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'All':
            return todos
        case 'Completed':
            return todos.filter(todo => todo.completed)
        case 'Active':
            return todos.filter(todo => !todo.completed)
        default:
            return new Error('Unkown Event: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos.data, state.filter)
})
const mapDispatchToProps = dispatch => ({
    toggleTodoAction: id => dispatch(toggleTodoAction(id)),
    fetchTodosAction: () => dispatch(fetchTodosAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
