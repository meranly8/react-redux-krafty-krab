import React from 'react'
import { connect } from 'react-redux'
import { deleteCraft } from '../../actions/craftActions'

const BacklogCard = (props) => {
    return(
        <div>
            <h4 className="margin-bottom-0">
                 {props.craft.name} ({props.craft.craft_type}) &nbsp;
                {window.location.pathname === "/crafts/backlog" ? (
                    <button onClick={() => props.deleteCraft(props.craft.id)}>Delete</button>
                    ) : (
                    null
                )}
            </h4>
            <small><p className="margin-0"><b>Date Added:</b> {props.craft.created_at}</p></small>
            <small>{props.craft.description}</small>
        </div>
    )
}

export default connect(null, { deleteCraft })(BacklogCard)