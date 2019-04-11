import { createStore } from 'redux'
import reducer from './reducers'
import {
    addTodoAction,
    toggleTodoAction,
    setFilterAction,
    setTodoTextAction
} from './action'

const store = createStore(reducer)

// 初始state
console.log(store.getState())

// 订阅 state 的变化
const unsubscribe = store.subscribe(state => {
    console.log(store.getState())
})

store.dispatch(addTodoAction('learn react'))
store.dispatch(toggleTodoAction(0))
store.dispatch(setFilterAction('Active'))
store.dispatch(setTodoTextAction('learn vue'))

// 取消订阅
unsubscribe()
