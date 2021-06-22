import React from 'react'

const CraftCard = props => {
    return (
        <div>
            <h4>{props.name} ({props.craft_type})</h4>
        </div>
    )
}

export default CraftCard