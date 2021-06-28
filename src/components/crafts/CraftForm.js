import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createCraft } from '../../actions/craftActions'
import { withRouter } from 'react-router-dom'

class CraftForm extends Component {
    state = {
        name: '',
        craft_type: '',
        description: '',
        date_started: '',
        date_completed: '',
        date_sold: '',
        price: '',
        image_url: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createCraft(this.state)
        this.setState({
            name: '',
            craft_type: '',
            description: '',
            date_started: '',
            date_completed: '',
            date_sold: '',
            price: '',
            image_url: ''
        })
        this.props.history.push("/crafts")
    }

    render(){
        return (
            <div>
                <br />
                <h2 className="main-header">Add Craft</h2>
                <div className="main-header"><small>
                    Additional attributes are added to the craft based on the dates, indicating what stage it is in.<br />
                    <b>Backlog</b> = no dates, <b>Work In Progress</b> = Date Started &amp; no Date Completed, <b>Inventory</b> = Date Completed &amp; no Date Sold, <b>Sold</b> = Date Sold</small>
                </div>
                <form onSubmit={this.handleOnSubmit}>
                    <p><label>Name &nbsp;
                        <input onChange={this.handleOnChange} name="name" required value={this.state.name} />
                    </label></p>
                    <p><label>Craft Type &nbsp;
                        <select onChange={this.handleOnChange} name="craft_type" value={this.state.craft_type} required >
                            <option value=""></option>
                            <option value="Bracelet">Bracelet</option>
                            <option value="Embroidery">Embroidery</option>
                            <option value="Knit">Knit</option>
                            <option value="Painting">Painting</option>
                            <option value="Pom Poms">Pom Poms</option>
                            <option value="Other">Other</option>
                        </select>
                    </label></p>
                    <p><label>Description &nbsp;
                        <textarea onChange={this.handleOnChange} name="description" value={this.state.description} />
                    </label></p>
                    <p><label>Date Started &nbsp;
                        <input type="date" onChange={this.handleOnChange} name="date_started" value={this.state.date_started}/>
                    </label></p>
                    <p><label>Date Completed &nbsp;
                        <input type="date" onChange={this.handleOnChange} name="date_completed" value={this.state.date_completed} />
                    </label></p>
                    <p><label>Date Sold &nbsp;
                        <input type="date" onChange={this.handleOnChange} name="date_sold" value={this.state.date_sold} />
                    </label></p>
                    <p><label>Price $
                        <input type="number" onChange={this.handleOnChange} name="price" min="0" value={this.state.price} />
                    </label></p>
                    <p><label>Image Link &nbsp;
                        <input onChange={this.handleOnChange} name="image_url" value={this.state.image_url} />
                    </label></p>
                    <input type="submit"/><br /><br /><br />
                </form>
            </div>
        )
    }
}

export default connect(null, {createCraft})(withRouter(CraftForm))