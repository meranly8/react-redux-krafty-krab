import React from 'react'
import { connect } from 'react-redux'
import { deleteCraft } from '../../actions/craftActions'

const WIPCard = (props) => {
    return(
        <div>
            <h4 className="margin-0">
                {props.craft.name} - {props.craft.craft_type} <button onClick={() => props.deleteCraft(props.craft.id)}>Delete</button>
            </h4>
            <small>Date Started: {props.craft.date_started}</small><br />
            <small>Days Since Started: {props.daysSince(props.craft.date_started)}</small><br />
            
            {props.craft.description}<br /><br />
        </div>
    )
}

export default connect(null, { deleteCraft })(WIPCard)