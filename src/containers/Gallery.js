import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'

import CraftImage from '../components/crafts/CraftImage'

class Gallery extends Component {
    state = {
        incrementBy: 0
    }
    
    componentDidMount() {
        this.props.fetchCrafts()
    }

    renderImages = () => {
        const images = this.props.crafts.filter(craft => craft.image_url !== null)
        return images.map(craft => <CraftImage craft={craft} incrementBy={this.state.incrementBy} key={craft.id}/>)
    }
    
    incrementNumber = event => {
        this.setState({
            incrementBy: event.target.value
        }, () => console.log(this.state))
    }
    
    render() {
        return (
            <div className="padding-left">
                <br /><br /><br />
                <div className="grid-container-crafts">
                    <input type="number" onChange={this.incrementNumber}/><br/>
                    {this.renderImages()}
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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