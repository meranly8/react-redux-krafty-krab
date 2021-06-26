const manageCrafts = (state = {crafts: [], loading: false, total: 0}, action) => {
    switch(action.type){
        case 'SET_CRAFTS':
            state = {...state, crafts: action.payload, loading: false}

            const sold = state.crafts.filter(craft => craft.sold === true)
            const prices = sold.map(craft => craft.price)
            const sum = prices.reduce((total, price) => total + price)

            return {...state, crafts: action.payload, loading: false, total: sum}
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