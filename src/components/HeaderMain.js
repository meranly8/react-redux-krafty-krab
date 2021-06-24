import React from 'react'

const HeaderMain = () => {
    // const currentDateTime = new Date()

    return(
        <div>
            <h1>Krafty Krab</h1>
            <small>{new Date().toLocaleString() + ''}</small>
        </div>
    )
}

export default HeaderMain