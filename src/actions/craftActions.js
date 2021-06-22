const url = 'http://localhost:3001/crafts'

const setCrafts = crafts => ({type: 'SET_CRAFTS', payload: crafts})

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