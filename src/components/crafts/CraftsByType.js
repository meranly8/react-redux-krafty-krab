import React from 'react'
import CraftCard from '../crafts/CraftCard'

const CraftsByType = (props) => {
    
    function renderCraftsByType(craft_type) {
        const craftsByType = props.crafts.filter(craft => craft.craft_type === craft_type)
        const sorted = craftsByType.sort((a, b) => a.name > b.name ? 1 : -1)
        return sorted.map(craft => <CraftCard key={craft.id} craft={craft}/>)
    }
    
    return(
        <div className="grid-container-all">
            <section>
                <h4 className="margin-0"><u>Bracelets</u> ({renderCraftsByType("Bracelet").length})</h4>
                    <span>
                        {renderCraftsByType("Bracelet")}
                    </span>
            </section>
            <section className="App">
                <h4 className="margin-0"><u>Embroideries</u> ({renderCraftsByType("Embroidery").length})</h4>
                    <span>
                        {renderCraftsByType("Embroidery")}
                    </span>
            </section>
            <section>
                <h4 className="margin-0"><u>Knits</u> ({renderCraftsByType("Knit").length})</h4>
                    <span>
                        {renderCraftsByType("Knit")}
                    </span>
            </section>
            <section>
                <h4 className="margin-0"><u>Pom Poms</u> ({renderCraftsByType("Pom Poms").length})</h4>
                    <span>
                        {renderCraftsByType("Pom Poms")}
                    </span>
            </section>
        </div>
    )
}

export default CraftsByType