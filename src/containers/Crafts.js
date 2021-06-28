import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBarCrafts from '../components/NavBarCrafts'

import CraftsByType from '../components/crafts/CraftsByType'
import BacklogCard from '../components/crafts/BacklogCard'
import WIPCard from '../components/crafts/WIPCard'
import InventoryCard from '../components/crafts/InventoryCard'
import SoldCard from '../components/crafts/SoldCard'

class Crafts extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    getDaysSince(start, from = new Date()) {
        const start_date = new Date(start)
        const from_date = new Date(from)

        const timeDiff = from_date.getTime() - start_date.getTime()
        const oneDay = 1000 * 60 * 60 * 24

        return Math.round(timeDiff / oneDay)
    }
    
    stageCrafts = (stage) => this.props.crafts.filter(craft => craft[stage] === true)

    renderBacklogCards = () => {
        const sortedBacklog = this.stageCrafts('backlog').sort((a, b) => a.created_at < b.created_at ? 1 : -1)
        return sortedBacklog.map(craft => < BacklogCard key={craft.id} craft={craft}/>)
    }

    renderWIPCards = () => {
        const sortedWIP = this.stageCrafts('wip').sort((a, b) => a.date_started > b.date_started ? 1 : -1)
        return sortedWIP.map(craft => < WIPCard key={craft.id} craft={craft} daysSince={this.getDaysSince}/>)
    }

    renderInventoryCards = () => {
        const sortedInventory = this.stageCrafts('inventory').sort((a, b) => a.date_completed > b.date_completed ? 1 : -1)
        return sortedInventory.map(craft => < InventoryCard key={craft.id} craft={craft} daysSince={this.getDaysSince}/>)
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
                    <div className="padding-left">
                        < Switch >
                            < Route exact path="/crafts">
                                <h2>{this.props.crafts.length} Crafts Total</h2>
                                <div className='grid-container-all'>
                                    < CraftsByType crafts={this.props.crafts} />
                                </div>
                            </ Route >
                            < Route exact path="/crafts/backlog">
                                <div >
                                    <h2>{this.renderBacklogCards().length} Ideas in Backlog</h2>
                                    <div>{this.renderBacklogCards()}</div>
                                </div>
                            </Route>
                            < Route exact path="/crafts/wip">
                                <div>
                                    <h2>{this.renderWIPCards().length} Work in Progress</h2>
                                    <div>{this.renderWIPCards()}</div>
                                </div>
                            </Route>
                            < Route exact path="/crafts/inventory">
                                <div>
                                    <h2>{this.renderInventoryCards().length} Crafts in Inventory</h2>
                                    <div className="grid-container-crafts">{this.renderInventoryCards()}</div>
                                </div>
                            </Route>
                            < Route exact path="/crafts/sold">
                                <div>
                                    <h2 className="margin-bottom-0">{this.renderSoldCards().length} Crafts Sold</h2>
                                    <h4 className="margin-0">Total: ${this.props.total}</h4><br />
                                    <div className="grid-container-crafts">{this.renderSoldCards()}</div>
                                </div>
                            </Route>
                        </ Switch >
                    </div>
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