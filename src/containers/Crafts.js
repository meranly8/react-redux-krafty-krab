import React, {Component} from 'react'
import CraftForm from '../components/CraftForm'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'

class Crafts extends Component {
    render(){
        return (
            <div>
                < CraftForm />
            </div>
        )
    }
}

export default connect(null, {fetchCrafts})(Crafts)