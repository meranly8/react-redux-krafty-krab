import React from 'react'

const HeaderMain = () => {
    // const currentDateTime = new Date()

    return(
        <div>
            <h1>Krafty Krab</h1>
            <p>{new Date().toLocaleString() + ''}</p>
        </div>
    )
}

export default HeaderMain