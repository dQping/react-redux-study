import { SET_FILTER } from '../action/actionTypes'

/**
 *
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
const filter = (state = 'All', action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state
    }
}

export default filter
