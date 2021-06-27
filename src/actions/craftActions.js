const url = 'http://localhost:3001/crafts'

const setCrafts = crafts => ({type: 'SET_CRAFTS', payload: crafts})

const addCraft = craft => ({type: 'ADD_CRAFT', payload: craft})

const deletedCraft = id => ({type: 'DELETED_CRAFT', payload: id})

export const fetchCrafts = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            const crafts = json.data.map(craft => {
                return {id: craft.id, ...craft.attributes}
            })
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
            const craft = {id: json.data.id, ...json.data.attributes}
            dispatch(addCraft(craft))
        })
    }
}

export const deleteCraft = id => {
    return (dispatch) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accepts: 'application/json'
            }
        }
        fetch(`${url}/${id}`, configObj)
        .then(resp => resp.json())
        .then(json => {
            dispatch(deletedCraft(id))
            alert(json.message)
        })
    }
}