const url = 'http://localhost:3001/crafts'

export const fetchCrafts = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
        })
    }
}