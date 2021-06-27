import React from 'react'
import { connect } from 'react-redux'
import { deleteCraft } from '../../actions/craftActions'

const CraftCard = props => {
    const stage = () => {
        if (props.craft.backlog === true) {
            return "B"
        } else if (props.craft.wip === true) {
            return "WIP"
        } else if (props.craft.inventory === true) {
            return "I"
        } else if (props.craft.sold === true) {
            return "$"
        }
    }
    
    return (
        <div>
            <p className="margin-bottom-0">{props.craft.name} <small>({stage()})</small> </p>
        </div>
    )
}

export default connect(null, { deleteCraft })(CraftCard)