import React from 'react'
import { connect } from 'react-redux'
import { deleteCraft } from '../../actions/craftActions'

const SoldCard = (props) => {
    return(
        <div>
            <h4 className="margin-0">
                {props.craft.name} ({props.craft.craft_type})
            </h4>
            <small><p className="margin-0"><b>Date Sold:</b> {props.craft.date_sold}</p></small>

            <small><p className="margin-0"><b>Sold For:</b> ${props.craft.price}</p></small><br />
            
            <small>{props.craft.description}</small><br />

            {props.craft.image_url === null || props.craft.image_url === "" ? null : <img src={props.craft.image_url} alt={props.craft.name} className="image-card"/> }<br />

            <button onClick={() => props.deleteCraft(props.craft.id)}>Delete</button><br/><br/><br/>
        </div>
    )
}

export default connect(null, { deleteCraft })(SoldCard)