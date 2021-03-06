import React, { Component } from 'react'
import { connect } from 'react-redux'
import BacklogCard from '../components/crafts/BacklogCard'
import { fetchCrafts } from '../actions/craftActions'

class Home extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }
    
    stage = (stage) => this.props.crafts.filter(craft => craft[stage] === true)

    renderBacklogCards = () => {
        const sorted = this.stage("backlog").sort((a, b) => a.created_at < b.created_at ? 1 : -1)
        return sorted.map(craft => < BacklogCard key={craft.id} craft={craft}/>)
    }

    renderImages = () => {
        const images = this.props.crafts.filter(craft => craft.image_url !== null)
        const selectedImages = images.sort(() => Math.random() - Math.random()).slice(0, 4)
        return selectedImages.map(craft => <img src={craft.image_url} alt={craft.name} key={craft.id} className="image-card"/>)
    }

    render(){
        return (
            <div>
                <div className="grid-container-home"><br />
                    <section>
                        <h2 className="margin-bottom-0"><u>Most Recent Ideas</u></h2>
                        {this.renderBacklogCards().slice(0, 3)}
                    </section>
                    <section>
                        <h2 className="margin-bottom-0"><u>Craft Stage Totals</u> <small>({this.props.crafts.length})</small></h2>
                        <p className="margin-top-0">Backlog: {this.stage("backlog").length}</p>
                        <p>Work in Progress: {this.stage("wip").length}</p>
                        <p>Inventory: {this.stage("inventory").length}</p>
                        <p>Sold: {this.stage("sold").length}</p><br />

                        <h3 className="margin-0">Total of Crafts Sold: ${this.props.total}</h3>
                    </section>
                </div><br /><br /><br /><br /><br />
                <div>
                    {this.renderImages()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        crafts: state.crafts,
        loading: state.loading,
        total: state.total
    }
}

export default connect(mapStateToProps, { fetchCrafts })(Home)