import React from 'react'
import CraftCardFull from '../crafts/CraftCardFull'

const CraftsByTypeFull = (props) => {
    
    function renderCraftCardsFull(type) {
        const craftsByType = props.crafts.filter(craft => craft.craft_type === type)
        const sorted = craftsByType.sort((a, b) => a.name > b.name ? 1 : -1)
        return sorted.map(craft => <CraftCardFull key={craft.id} craft={craft}/>)
    }

    
    return(
        <div>
            <section>
                <h2><u>Bracelets</u> ({renderCraftCardsFull("Bracelet").length})</h2>
                    <span>
                        {renderCraftCardsFull("Bracelet")}
                    </span>
                <hr />
            </section>
            <section className="App">
                <h2><u>Embroideries</u> ({renderCraftCardsFull("Embroidery").length})</h2>
                    <span>
                        {renderCraftCardsFull("Embroidery")}
                    </span>
                <hr />
            </section>
            <section>
                <h2><u>Knits</u> ({renderCraftCardsFull("Knit").length})</h2>
                    <span>
                        {renderCraftCardsFull("Knit")}
                    </span>
                <hr />
            </section>
            <section>
                <h2><u>Pom Poms</u> ({renderCraftCardsFull("Pom Poms").length})</h2>
                    <span>
                        {renderCraftCardsFull("Pom Poms")}
                    </span>
            </section>
        </div>
    )

}

export default CraftsByTypeFull


