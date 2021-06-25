import React, { Component } from 'react'
import { connect } from 'react-redux'
import Backlog from './Backlog'
import { fetchCrafts } from '../actions/craftActions'

class Home extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    stage = (stage) => this.props.crafts.filter(craft => craft[stage] === true)

    render(){
        return (
            <div><br />
                <section className="section-1">
                    < Backlog />
                </section>
                <section>
                    <h3><u>Totals by Craft Stage</u></h3>
                    <p>Backlog: {this.stage("backlog").length}</p>
                    <p>Work in Progress: {this.stage("wip").length}</p>
                    <p>Inventory: {this.stage("inventory").length}</p>
                    <p>Sold: {this.stage("sold").length}</p>
                </section>
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

export default connect(mapStateToProps, { fetchCrafts })(Home)