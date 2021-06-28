import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'

import CraftsByType from '../components/crafts/CraftsByType'

class Index extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    render() {
        return (
            <div>
                <h2 className="main-header">Index</h2>
                <div className="padding-left">
                    <div>
                        < CraftsByType crafts={this.props.crafts}/>
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