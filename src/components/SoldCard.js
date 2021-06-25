import React from 'react'

const SoldCard = (props) => {    
    return(
        <div>
            <h5 className="margin-0">
                {props.craft.name} (${props.craft.price}) - {props.craft.craft_type} &nbsp;
                
                <button onClick={() => props.deleteCraft(props.craft.id)}>Delete</button> 
            </h5>
            {props.craft.description}<br />
            Sold on {props.craft.date_sold} 
        </div>
    )
}

export default SoldCard