import {ADD_EXP} from '../actions/index'

const expensesReducer=function (state=[],action) {
    if (action.type === ADD_EXP) {
        return [...state,action.input]
    }

    if (action.type === 'REMOVE_EXP') {
        return state.filter((exp,i) => {
            return i != action.id
        })
    }

    return state
}
export default expensesReducer