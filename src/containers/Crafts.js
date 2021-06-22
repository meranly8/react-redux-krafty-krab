import React, {Component} from 'react'
import CraftForm from '../components/CraftForm'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'
import CraftCard from '../components/CraftCard'

class Crafts extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }
    
    render(){
        return (
            <div>
                < CraftForm />
            </div>
        )
    }
}

export default connect(null, {fetchCrafts})(Crafts)