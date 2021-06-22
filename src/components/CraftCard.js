import React from 'react'

const CraftCard = props => {
    return (
        <div>
            <h4>{props.craft.name} ({props.craft.craft_type})</h4>
        </div>
    )
}

export default CraftCard