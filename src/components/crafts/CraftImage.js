import React, {Component} from 'react'

class CraftImage extends Component {
    state = {
        likes: 0
    }

    onLike = () => {
        this.setState((prevState, prevProps) => {
            return {
                likes: (prevState.likes + parseInt(prevProps.incrementBy))
            }
        }, () => console.log(this.state))
    }

    render() {
        return (
            <div>
                <img src={this.props.craft.image_url} alt={this.props.craft.name} key={this.props.craft.id} className="image-gallery"/>< br />
                <button onClick={this.onLike}>Like</button> ({this.state.likes})
            </div>
        )
    }
}

export default CraftImage