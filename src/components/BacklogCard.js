import React from 'react'

const Backlog = (props) => {    
    return(
        <div>
            <h5>
                {props.craft.created_at}: {props.craft.name} - {props.craft.craft_type} &nbsp;
                {window.location.pathname === "/crafts/backlog" ? (
                    <button onClick={() => props.deleteCraft(props.craft.id)}>Delete</button> 
                    ) : (
                    null)
                }
            
            </h5>
        </div>
    )
}

export default Backlog