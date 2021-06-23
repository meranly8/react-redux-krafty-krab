import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'
import CraftCard from '../components/CraftCard'

class Crafts extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    renderCrafts = () => {
        return this.props.crafts.map(craft => <CraftCard key={craft.id} craft={craft}/>)
    }

    render(){
        return (
            <div>
                <ul>
                    {this.props.loading ? <h3>Loading</h3> : this.renderCrafts()}
                </ul>
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