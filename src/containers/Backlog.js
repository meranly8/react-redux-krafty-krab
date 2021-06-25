import React, { Component } from 'react'
import { connect } from 'react-redux'
import BacklogCard from '../components/BacklogCard'
import { fetchCrafts } from '../actions/craftActions'

class Backlog extends Component {
    renderBacklogCards = () => {
        const backlog = this.props.crafts.filter(craft => craft.backlog === true)
        const sorted = backlog.sort((a, b) => a.created_at < b.created_at ? 1 : -1)

        return sorted.map(craft => < BacklogCard key={craft.id} craft={craft}/>)
    }

    render() {
        return (
            <div >
                <h3><u>Most Recent Ideas</u></h3>
                <div >{this.renderBacklogCards()}</div>
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

export default connect(mapStateToProps, { fetchCrafts })(Backlog)