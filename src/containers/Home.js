import React, { Component } from 'react'
import { connect } from 'react-redux'
import Backlog from '../components/Backlog'
import { fetchCrafts } from '../actions/craftActions'

class Home extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    inventory = this.props.crafts.filter(craft => craft.inventory === true)
    
    render(){
        return (
            <div>
                <section>
                    < Backlog />
                </section>
                <section>
                    Total Crafts in Inventory: {this.inventory.length}
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