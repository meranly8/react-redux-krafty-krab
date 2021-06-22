const manageCrafts = (state = {crafts: [], loading: false}, action) => {
    switch(action.type){
        case 'SET_CRAFTS':
        return {...state, crafts: action.payload, loading: false}
        case 'LOADING':
            return {...state, loading: true}
        case 'ADD_CRAFT':
            return {...state, crafts: [...state.crafts, action.payload] }
        default:
            return state
    }
}

export default manageCrafts