import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'

import CraftsByTypeFull from '../components/crafts/CraftsByTypeFull'

class Index extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    render() {
        return (
            <div>
                <h2 className="main-header">Index</h2>
                <div className="padding-left">
                    < CraftsByTypeFull crafts={this.props.crafts}/>
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