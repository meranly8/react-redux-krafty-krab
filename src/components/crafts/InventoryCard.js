import React from 'react'
import { connect } from 'react-redux'
import { deleteCraft } from '../../actions/craftActions'

const InventoryCard = (props) => {
    return(
        <div>
            
            <h4 className="margin-0">
                {props.craft.name} - {props.craft.craft_type} &nbsp; <button onClick={() => props.deleteCraft(props.craft.id)}>Delete</button>
            </h4>
            <small><p className="margin-bottom-0"><b>Date Started:</b> {props.craft.date_started}</p> 
            <p className="margin-0"><b>Date Completed:</b> {props.craft.date_completed}</p>
            <p className="margin-0"><b>Days to Complete:</b> {props.daysSince(props.craft.date_started, props.craft.date_completed)}</p></small><br />
            {props.craft.description}<br />
            {props.craft.image_url === null || props.craft.image_url === "" ? null : <img src={props.craft.image_url} alt={props.craft.name} /> }<br />
            
        </div>
    )
}

export default connect(null, { deleteCraft })(InventoryCard)