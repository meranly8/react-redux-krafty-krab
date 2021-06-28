import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'

class Gallery extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    renderImages = () => {
        const images = this.props.crafts.filter(craft => craft.image_url !== null)
        return images.map(craft => {
            return (
                <img src={craft.image_url} alt={craft.name} key={craft.id} className="image-gallery"/>
            )
        })
    }
    
    render() {
        return (
            <div className="padding-left">
                <br /><br /><br />
                <div className="grid-container-crafts">
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