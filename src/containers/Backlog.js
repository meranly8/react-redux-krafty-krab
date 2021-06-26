import React, { Component } from 'react'
import { connect } from 'react-redux'
import BacklogCard from '../components/crafts/BacklogCard'

class Backlog extends Component {
    backlog = this.props.crafts.filter(craft => craft.backlog === true)
    
    renderBacklogCards = () => {
        const sorted = this.backlog.sort((a, b) => a.created_at < b.created_at ? 1 : -1)

        return sorted.map(craft => < BacklogCard key={craft.id} craft={craft}/>)
    }

    render() {
        return (
            <div ><br />
                <h3><u>Most Recent Ideas</u></h3>
                <div>{this.renderBacklogCards()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        crafts: state.crafts,
    }
}

export default connect(mapStateToProps)(Backlog)