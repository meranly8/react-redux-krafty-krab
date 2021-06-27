import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBarCrafts from '../components/NavBarCrafts'

import CraftCard from '../components/crafts/CraftCard'
import BacklogCard from '../components/crafts/BacklogCard'
import WIPCard from '../components/crafts/WIPCard'
import InventoryCard from '../components/crafts/InventoryCard'
import SoldCard from '../components/crafts/SoldCard'

class Crafts extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    renderCraftsByType = (craft_type) => {
        const craftsByType = this.props.crafts.filter(craft => craft.craft_type === craft_type)
        const sorted = craftsByType.sort((a, b) => a.name > b.name ? 1 : -1)
        return sorted.map(craft => <CraftCard key={craft.id} craft={craft}/>)
    }
    
    stageCrafts = (stage) => this.props.crafts.filter(craft => craft[stage] === true)

    renderBacklogCards = () => {
        const sortedBacklog = this.stageCrafts('backlog').sort((a, b) => a.created_at < b.created_at ? 1 : -1)
        return sortedBacklog.map(craft => < BacklogCard key={craft.id} craft={craft}/>)
    }

    renderWIPCards = () => {
        const sortedWIP = this.stageCrafts('wip').sort((a, b) => a.date_started > b.date_started ? 1 : -1)
        return sortedWIP.map(craft => < WIPCard key={craft.id} craft={craft}/>)
    }

    renderInventoryCards = () => {
        const sortedInventory = this.stageCrafts('inventory').sort((a, b) => a.date_completed > b.date_completed ? 1 : -1)
        return sortedInventory.map(craft => < InventoryCard key={craft.id} craft={craft}/>)
    }

    renderSoldCards = () => {
        const sortedSold = this.stageCrafts('sold').sort((a, b) => a.date_sold > b.date_sold ? 1 : -1)
        return sortedSold.map(craft => < SoldCard key={craft.id} craft={craft}/>)
    }

    

    render(){
        return (
            <div>
                < Router >
                <br />
                    <h2 className="main-header">Crafts</h2>
                    < NavBarCrafts /><br />
                    {this.props.loading ? <h3>Loading</h3> : null}
                    < Switch >
                        < Route exact path="/crafts">
                            <div className="grid-container">
                                <section>
                                    <h4 className="margin-0"><u>Bracelets</u> ({this.renderCraftsByType("Bracelet").length})</h4>
                                        <span>
                                            {this.renderCraftsByType("Bracelet")}
                                        </span>
                                </section>
                                <section className="App">
                                    <h4 className="margin-0"><u>Embroideries</u> ({this.renderCraftsByType("Embroidery").length})</h4>
                                        <span>
                                            {this.renderCraftsByType("Embroidery")}
                                        </span>
                                </section>
                                <section>
                                    <h4 className="margin-0"><u>Knits</u> ({this.renderCraftsByType("Knit").length})</h4>
                                        <span>
                                            {this.renderCraftsByType("Knit")}
                                        </span>
                                </section>
                                <section>
                                    <h4 className="margin-0"><u>Pom Poms</u> ({this.renderCraftsByType("Pom Poms").length})</h4>
                                        <span>
                                            {this.renderCraftsByType("Pom Poms")}
                                        </span>
                                </section>
                            </div>
                        </ Route >
                        < Route exact path="/crafts/backlog">
                            <div >
                                <h3><u>Ideas:</u> {this.renderBacklogCards().length}</h3>
                                <div>{this.renderBacklogCards()}</div>
                            </div>
                        </Route>
                        < Route exact path="/crafts/wip">
                            <div>
                                <h3><u>Work in Progress:</u> {this.renderWIPCards().length}</h3>
                                <div>{this.renderWIPCards()}</div>
                            </div>
                        </Route>
                        < Route exact path="/crafts/inventory">
                            <div>
                                <h3><u>Inventory:</u> {this.renderInventoryCards().length}</h3>
                                <div>{this.renderInventoryCards()}</div>
                            </div>
                        </Route>
                        < Route exact path="/crafts/sold">
                            <div>
                                <h3 className="margin-bottom-0"><u>Crafts Sold:</u> {this.renderSoldCards().length}</h3>
                                <h4 className="margin-0">Total: ${this.props.total}</h4><br />
                                <div>{this.renderSoldCards()}</div>
                            </div>
                        </Route>
                    </ Switch >
                </ Router >
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        crafts: state.crafts,
        loading: state.loading,
        total: state.total
    }
}

export default connect(mapStateToProps, {fetchCrafts})(Crafts)