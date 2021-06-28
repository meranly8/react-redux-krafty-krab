import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'

class Gallery extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }
    
    render() {
        return (
            <div className="padding-left">
                <h2>Gallery</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        crafts: state.crafts
    }
}

export default connect(mapStateToProps, { fetchCrafts })(Gallery)