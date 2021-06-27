import React, { Component } from 'react'
import { connect } from 'react-redux'
import BacklogCard from '../components/crafts/BacklogCard'
import { fetchCrafts } from '../actions/craftActions'

class Home extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }
    
    stage = (stage) => this.props.crafts.filter(craft => craft[stage] === true)

    renderBacklogCards = () => {
        const sorted = this.stage("backlog").sort((a, b) => a.created_at < b.created_at ? 1 : -1)
        return sorted.map(craft => < BacklogCard key={craft.id} craft={craft}/>)
    }

    render(){
        return (
            <div className="grid-container-home"><br />
                <section>
                    <h2 className="margin-bottom-0"><u>Most Recent Ideas</u></h2>
                    {this.renderBacklogCards().slice(0, 5)}
                </section>
                <section>
                    <h2 className="margin-bottom-0"><u>Craft Stage Totals</u></h2>
                    <p className="margin-top-0">Backlog: {this.stage("backlog").length}</p>
                    <p>Work in Progress: {this.stage("wip").length}</p>
                    <p>Inventory: {this.stage("inventory").length}</p>
                    <p>Sold: {this.stage("sold").length}</p><br />

                    <h3 className="margin-0">Total of Crafts Sold: ${this.props.total}</h3>
                </section>
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

export default connect(mapStateToProps, { fetchCrafts })(Home)