import React from 'react'
import { connect } from 'react-redux'
import { deleteCraft } from '../actions/craftActions'

const CraftCard = props => {
    return (
        <div>
            <h5>{props.craft.name} ({props.craft.craft_type}) <button onClick={() => props.deleteCraft(props.craft.id)}>Delete</button></h5>
        </div>
    )
}

export default connect(null, {deleteCraft})(CraftCard)