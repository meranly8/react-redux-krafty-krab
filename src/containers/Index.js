import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'

import CraftCardFull from '../components/crafts/CraftCardFull'

class Index extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    renderCraftCards = () => {
        const crafts = this.props.crafts.sort((a, b) => a.name > b.name ? 1 : -1)
        return crafts.map(craft => < CraftCardFull key={craft.id} craft={craft}/>)
    }

    render() {
        return (
            <div>
                <h2 className="main-header">Index ({this.renderCraftCards().length})</h2>
                <div className="padding-left">
                    <div>
                        <br />
                        {this.renderCraftCards()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        crafts: state.crafts
    }
}

export default connect(mapStateToProps, { fetchCrafts })(Index)