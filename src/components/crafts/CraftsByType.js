import React from 'react'
import CraftCard from '../crafts/CraftCard'
import CraftCardFull from '../crafts/CraftCardFull'

const CraftsByType = (props) => {
    
    function renderCraftsCards(craft_type) {
        const craftsByType = props.crafts.filter(craft => craft.craft_type === craft_type)
        const sorted = craftsByType.sort((a, b) => a.name > b.name ? 1 : -1)

        if (window.location.pathname === '/crafts') {
            return sorted.map(craft => <CraftCard key={craft.id} craft={craft}/>)
        } else if (window.location.pathname === '/crafts/index') {
            return sorted.map(craft => <CraftCardFull key={craft.id} craft={craft}/>)
        }
        
    }
    
    return (
        <>
            <section>
                <h2><u>Bracelets</u> ({renderCraftsCards("Bracelet").length})</h2>
                    <span>
                        {renderCraftsCards("Bracelet")}
                    </span>
                {window.location.pathname === '/crafts/index' ? <hr /> : null}
            </section>
            <section>
                <h2><u>Embroideries</u> ({renderCraftsCards("Embroidery").length})</h2>
                    <span>
                        {renderCraftsCards("Embroidery")}
                    </span>
                {window.location.pathname === '/crafts/index' ? <hr /> : null}
            </section>
            <section>
                <h2><u>Knits</u> ({renderCraftsCards("Knit").length})</h2>
                    <span>
                        {renderCraftsCards("Knit")}
                    </span>
                {window.location.pathname === '/crafts/index' ? <hr /> : null}
            </section>
            <section>
                <h2><u>Pom Poms</u> ({renderCraftsCards("Pom Poms").length})</h2>
                    <span>
                        {renderCraftsCards("Pom Poms")}
                    </span>
            </section>
        </>
    )
} 

export default CraftsByType