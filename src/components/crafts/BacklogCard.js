import React from 'react'
import { connect } from 'react-redux'
import { deleteCraft } from '../../actions/craftActions'

const BacklogCard = (props) => {
    return(
        <div>
            <h5 className="margin-0">
                {props.craft.created_at}: {props.craft.name} - {props.craft.craft_type} &nbsp;
                {window.location.pathname === "/crafts/backlog" ? (
                    <button onClick={() => props.deleteCraft(props.craft.id)}>Delete</button> 
                    ) : (
                    null
                )}
            </h5>
            {props.craft.description}
        </div>
    )
}

export default connect(null, { deleteCraft})(BacklogCard)