
const membersReducer=function (state=[],action) {
    if (action.type === 'ADD_PERSON') {
        return [...state,action.name]
    }

    if (action.type === 'REMOVE_PERSON') {
        return state.filter((exp,i) => {
            return i != action.id
        })
    }

    return state

}

export default membersReducer