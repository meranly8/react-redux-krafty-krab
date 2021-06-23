import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/craftActions'
import CraftCard from '../components/CraftCard'

class Crafts extends Component {
    componentDidMount() {
        this.props.fetchCrafts()
    }

    renderCraftsByType = (craft_type) => {
        const craftsByType = this.props.crafts.filter(craft => craft.craft_type === craft_type)
        return craftsByType.map(craft => <CraftCard key={craft.id} craft={craft}/>)
    }

    render(){
        return (
            <div>
                {this.props.loading ? <h3>Loading</h3> : null}
                <ul>
                    <h4><u>Bracelets</u> ({this.renderCraftsByType("Bracelet").length})</h4>
                        <ul>
                            {this.renderCraftsByType("Bracelet")}
                        </ul>
                    <h4><u>Embroideries</u> ({this.renderCraftsByType("Embroidery").length})</h4>
                        <ul>
                            {this.renderCraftsByType("Embroidery")}
                        </ul>
                    <h4><u>Knits</u> ({this.renderCraftsByType("Knit").length})</h4>
                        <ul>
                            {this.renderCraftsByType("Knit")}
                        </ul>
                    <h4><u>Paintings</u> ({this.renderCraftsByType("Painting").length})</h4>
                        <ul>
                            {this.renderCraftsByType("Painting")}
                        </ul>
                    <h4><u>Pom Poms</u> ({this.renderCraftsByType("Pom Poms").length})</h4>
                        <ul>
                            {this.renderCraftsByType("Pom Poms")}
                        </ul>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        crafts: state.crafts,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchCrafts})(Crafts)