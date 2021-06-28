import React from 'react'
import { connect } from 'react-redux'
import { deleteCraft } from '../../actions/craftActions'

const CraftCardFull = props => {
    const stage = () => {
        if (props.craft.backlog === true) {
            return "Backlog"
        } else if (props.craft.wip === true) {
            return "Work in Progress"
        } else if (props.craft.inventory === true) {
            return "Inventory"
        } else if (props.craft.sold === true) {
            return "Sold"
        }
    }
    
    return (
        <div>
            <div className="align-index-left">
                <h4 className="margin-0">
                    {props.craft.name} ({props.craft.craft_type})
                </h4>
                <p className="margin-0"><small>{stage()}</small> </p>
                <small><p className="margin-bottom-0"><b>Date Started:</b> {props.craft.date_started}</p> 

                <p className="margin-0"><b>Date Completed:</b> {props.craft.date_completed}</p>
                
                <p className="margin-0"><b>Date Sold:</b> {props.craft.date_sold}</p>
                
                <p className="margin-0"><b>Price:</b> {props.craft.date_sold}</p>
                
                <p className="margin-0"><b>Created:</b> {props.craft.created_at}</p>
                
                <p className="margin-0"><b>Description:</b> {props.craft.description}</p></small><br />
            </div>
            <div>
                {props.craft.image_url === null || props.craft.image_url === "" ? null : <img src={props.craft.image_url} alt={props.craft.name}/> }<br />
                
                <button onClick={() => props.deleteCraft(props.craft.id)}>Delete</button><br /><br />
            </div><br /><br /><br />
        </div>
    )
}

export default connect(null, { deleteCraft })(CraftCardFull)