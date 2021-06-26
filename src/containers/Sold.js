import React, { Component } from 'react'
import { connect } from 'react-redux'
import SoldCard from '../components/crafts/SoldCard'

class Sold extends Component {
    sold = this.props.crafts.filter(craft => craft.sold === true)
    
    renderSoldCards = () => {
        const sorted = this.sold.sort((a, b) => a.date_sold > b.date_sold ? 1 : -1)
        return sorted.map(craft => < SoldCard key={craft.id} craft={craft}/>)
    }

    render() {
        return (
            <div>
                <h3><u>Crafts Sold:</u> {this.sold.length}</h3>
                <h4>Total: ${this.props.total}</h4>
                <div className="grid-container">{this.renderSoldCards()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        crafts: state.crafts,
        total: state.total
    }
}

export default connect(mapStateToProps)(Sold)