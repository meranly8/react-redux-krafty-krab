import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBarIndex from '../components/NavBarIndex'
import CraftsByTypeFull from '../components/crafts/CraftsByTypeFull'
import CraftsByStageFull from '../components/crafts/CraftsByStageFull'

class Index extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    render() {
        return (
            <div>
                <Router>
                    <h2 className="main-header">Index</h2>
                    < NavBarIndex /><br />
                    <div className="padding-left">
                        < Switch >
                            < Route exact path="/crafts/index/type">
                                < CraftsByTypeFull crafts={this.props.crafts}/>
                            </ Route >
                            < Route exact path="/crafts/index/stage">
                                < CraftsByStageFull crafts={this.props.crafts}/>
                            </ Route >
                        </ Switch >
                    </div>
                </Router>
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