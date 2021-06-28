import React from 'react'
import CraftCardFull from '../crafts/CraftCardFull'

const CraftsByStageFull = (props) => {
    
    function renderCraftCardsFull(stage) {
        const crafts = props.crafts.filter(craft => craft[stage] === true)
        const sorted = crafts.sort((a, b) => a.date_sold > b.date_sold ? 1 : -1)
        return sorted.map(craft => <CraftCardFull key={craft.id} craft={craft}/>)
    }

    return(
        <div>
            
            <section id="backlog">
                <h2><u>Backlog</u> ({renderCraftCardsFull("backlog").length})</h2>
                    <span>
                        {renderCraftCardsFull("backlog")}
                    </span>
                <hr />
            </section>
            <section id="wip">
                <h2><u>Work in Progress</u> ({renderCraftCardsFull("wip").length})</h2>
                    <span>
                        {renderCraftCardsFull("wip")}
                    </span>
                <hr />
            </section>
            <section id="inventory">
                <h2><u>Inventory</u> ({renderCraftCardsFull("inventory").length})</h2>
                    <span>
                        {renderCraftCardsFull("inventory")}
                    </span>
                <hr />
            </section>
            <section id="sold">
                <h2><u>Sold</u> ({renderCraftCardsFull("sold").length})</h2>
                    <span>
                        {renderCraftCardsFull("sold")}
                    </span>
            </section>
        </div>
    )

}

export default CraftsByStageFull


