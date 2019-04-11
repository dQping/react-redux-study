import { SET_TODO_TEXT } from '../action/actionTypes'

/**
 *
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
const todoApp = (state = '', action) => {
    switch (action.type) {
        case SET_TODO_TEXT:
            return action.text
        default:
            return state
    }
}

export default todoApp
