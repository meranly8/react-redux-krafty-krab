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
        const backlog = this.stage("backlog")
        const sorted = backlog.sort((a, b) => a.created_at < b.created_at ? 1 : -1)
        return sorted.map(craft => < BacklogCard key={craft.id} craft={craft}/>)
    }

    render(){
        return (
            <div className="grid-container-home"><br />
                <section className="section-1">
                    <h3><u>Most Recent Ideas</u></h3>
                    {this.renderBacklogCards()}
                </section>
                <section>
                    <h3><u>Craft Stage Totals</u></h3>
                    <p>Backlog: {this.stage("backlog").length}</p>
                    <p>Work in Progress: {this.stage("wip").length}</p>
                    <p>Inventory: {this.stage("inventory").length}</p>
                    <p>Sold: {this.stage("sold").length}</p><br />
                    <h3 className="margin-0"><u>Total Sold:</u></h3>
                    {this.stage("sold").length} Crafts for ${this.props.total}
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