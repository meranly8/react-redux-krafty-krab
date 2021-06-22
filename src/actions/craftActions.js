const url = 'http://localhost:3001/crafts'

const setCrafts = crafts => ({type: 'SET_CRAFTS', payload: crafts})

const addCraft = craft => ({type: 'ADD_CRAFT', payload: craft})

export const fetchCrafts = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            const crafts = json.data.map(craft => {
                return {id: craft.id, ...craft.attributes}
            })
            console.log(crafts)
            dispatch(setCrafts(crafts))
        })
    }
}

export const createCraft= craft => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accepts: 'application/json'
            },
            body: JSON.stringify(craft)
        }

        fetch(url, configObj)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            const craft = {id: json.data.id, ...json.data.attributes}
            dispatch(addCraft(craft))
        })
    }
}