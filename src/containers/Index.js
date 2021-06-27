import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBarIndex from '../components/NavBarIndex'

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
                    
                    < Switch >
                        < Route exact path="/crafts/index/type">
                            <h2>By Type</h2>
                        </ Route >
                        < Route exact path="/crafts/index/stage">
                            <h2>By Stage</h2>
                        </ Route >
                    </ Switch >
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