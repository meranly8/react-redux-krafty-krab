import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'
import CraftCard from '../components/crafts/CraftCard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBarCrafts from '../components/NavBarCrafts'
import Backlog from './Backlog'
import Sold from './Sold'

class Crafts extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    renderCraftsByType = (craft_type) => {
        const craftsByType = this.props.crafts.filter(craft => craft.craft_type === craft_type)
        const sorted = craftsByType.sort((a, b) => a.name > b.name ? 1 : -1)
        return sorted.map(craft => <CraftCard key={craft.id} craft={craft}/>)
    }

    renderCraftsByStage = stage => {
        const craftsByStage = this.props.crafts.filter(craft => craft[stage] === true)
        
        return craftsByStage.map(craft => <CraftCard key={craft.id} craft={craft}/>)
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
                        < Route exact path="/crafts/backlog">< Backlog /></Route>
                        < Route exact path="/crafts/wip">{this.renderCraftsByStage("wip")}</Route>
                        < Route exact path="/crafts/inventory">{this.renderCraftsByStage("inventory")}</Route>
                        < Route exact path="/crafts/sold">< Sold /></Route>
                    </ Switch >
                </ Router >
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        crafts: state.crafts,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchCrafts})(Crafts)