import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { setTodoTextAction, addTodoAction } from '../action'

const mapStateToProps = state => ({
    text: state.text
})
const mapDispatchToProps = dispatch => ({
    setTodoTextAction: text => dispatch(setTodoTextAction(text)),
    addTodoAction: text => dispatch(addTodoAction(text))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)
