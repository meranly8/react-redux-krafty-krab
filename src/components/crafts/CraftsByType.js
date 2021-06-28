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
                <h2>Bracelets <small>({renderCraftsCards("Bracelet").length})</small></h2>
                    <span>
                        {renderCraftsCards("Bracelet")}
                    </span>
                {window.location.pathname === '/crafts/index' ? <hr /> : null}
            </section>
            <section>
                <h2>Embroideries <small>({renderCraftsCards("Embroidery").length})</small></h2>
                    <span>
                        {renderCraftsCards("Embroidery")}
                    </span>
                {window.location.pathname === '/crafts/index' ? <hr /> : null}
            </section>
            <section>
                <h2>Knits <small>({renderCraftsCards("Knit").length})</small></h2>
                    <span>
                        {renderCraftsCards("Knit")}
                    </span>
                {window.location.pathname === '/crafts/index' ? <hr /> : null}
            </section>
            <section>
                <h2>Paintings <small>({renderCraftsCards("Painting").length})</small></h2>
                    <span>
                        {renderCraftsCards("Painting")}
                    </span>
                {window.location.pathname === '/crafts/index' ? <hr /> : null}
            </section>
            <section>
                <h2>Pom Poms <small>({renderCraftsCards("Pom Poms").length})</small></h2>
                    <span>
                        {renderCraftsCards("Pom Poms")}
                    </span>
                {window.location.pathname === '/crafts/index' ? <hr /> : null}
            </section>
            <section>
                <h2>Other <small>({renderCraftsCards("Other").length})</small></h2>
                    <span>
                        {renderCraftsCards("Other")}
                    </span>
            </section>
            
        </>
    )
} 

export default CraftsByType