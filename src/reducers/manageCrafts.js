const manageCrafts = (state = {crafts: [], loading: false, total: 0}, action) => {
    switch(action.type){
        case 'SET_CRAFTS':
            const sold = action.payload.filter(craft => craft.sold === true)
            const sum = sold.reduce(((total, craft) => total + craft.price), 0)

            return {...state, crafts: action.payload, total: sum}
        case 'LOADING':
            return {...state, loading: true}
        case 'ADD_CRAFT':
            return {...state, crafts: [...state.crafts, action.payload] }
        case 'DELETED_CRAFT':
            const newCrafts = state.crafts.filter(craft => craft.id !== action.payload)
            const newSum = newCrafts.reduce((total, craft) => total + craft.price)

            return {...state, crafts: newCrafts, total: newSum}
        default:
            return state
    }
}

export default manageCrafts