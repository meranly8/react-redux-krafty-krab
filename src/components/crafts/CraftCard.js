import React from 'react'
import { connect } from 'react-redux'
import { deleteCraft } from '../../actions/craftActions'

const CraftCard = props => {
    return (
        <div>
            <p>{props.craft.name}</p>
        </div>
    )
}

export default connect(null, {deleteCraft})(CraftCard)