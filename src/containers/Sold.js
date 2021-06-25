import React, { Component } from 'react'
import { connect } from 'react-redux'
import SoldCard from '../components/SoldCard'

class Sold extends Component {
    renderSoldCards = () => {
        const sold = this.props.crafts.filter(craft => craft.sold === true)
        const sorted = sold.sort((a, b) => a.date_sold > b.date_sold ? 1 : -1)
        return sorted.map(craft => < SoldCard key={craft.id} craft={craft}/>)
    }

    render() {
        return (
            <div >
                <h3><u>Crafts Sold</u></h3>
                <div >{this.renderSoldCards()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        crafts: state.crafts
    }
}

export default connect(mapStateToProps)(Sold)