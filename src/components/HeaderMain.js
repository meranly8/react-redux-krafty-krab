import React from 'react'

const HeaderMain = () => {
    return(
        <div>
            <h1>Krafty Krab</h1>
            <small>Currently: {new Date().toLocaleString() + ''}</small>
        </div>
    )
}

export default HeaderMain