const manageCrafts = (state = {crafts: [], loading: false}, action) => {
    switch(action.type){
        case 'GET_CRAFTS':
            return {...state, crafts: action.payload}
        case 'LOADING':
            return {...state, loading: true}
        default:
            return state
    }
}

export default manageCrafts