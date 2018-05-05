export const ADD_EXP = 'ADD_EXP'

export const addExp=input => ({
    type: ADD_EXP,
    input
})
export const removeExp=id => ({
    type: 'REMOVE_EXP',
    id
})
export const addPerson=name => ({
    type: 'ADD_PERSON',
    name
})
export const removePerson=id => ({
    type: 'REMOVE_PERSON',
    id
})
