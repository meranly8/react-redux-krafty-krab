import React from 'react'
import { connect } from 'react-redux'
import { deleteCraft } from '../../actions/craftActions'

const WIPCard = (props) => {
    return(
        <div>
            <h4 className="margin-0">
                {props.craft.name} ({props.craft.craft_type}) <button onClick={() => props.deleteCraft(props.craft.id)}>Delete</button>
            </h4>
            <small><p className="margin-0"><b>Date Started:</b> {props.craft.date_started}</p>

            <p className="margin-0"><b>Days Since Started:</b> {props.daysSince(props.craft.date_started)}</p></small>
            
            <small>{props.craft.description}</small><br /><br /><br />
        </div>
    )
}

export default connect(null, { deleteCraft })(WIPCard)