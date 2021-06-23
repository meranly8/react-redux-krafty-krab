const manageCrafts = (state = {crafts: [], loading: false}, action) => {
    switch(action.type){
        case 'SET_CRAFTS':
        return {...state, crafts: action.payload, loading: false}
        case 'LOADING':
            return {...state, loading: true}
        case 'ADD_CRAFT':
            return {...state, crafts: [...state.crafts, action.payload] }
        case 'DELETED_CRAFT':
            const newCrafts = state.crafts.filter(craft => craft.id !== action.payload)
            return {...state, crafts: newCrafts}
        default:
            return state
    }
}

export default manageCrafts