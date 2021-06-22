import React, {Component} from 'react'

class CraftForm extends Component {
    state = {
        name: '',
        craft_type: '',
        description: '',
        date_started: '',
        date_completed: '',
        price: null,
        date_sold: '',
        notes: '',
        image_url: ''
    }
    
    render(){
        return (
            <div>
                <p><label>Name &nbsp;
                    <input name="name" required/>
                </label></p>
                <p><label>Craft Type &nbsp;
                    <select name="craft-type" required>
                        <option selected="Select"></option>
                        <option value="bracelet">Bracelet</option>
                        <option value="embroidery">Embroidery</option>
                        <option value="knit">Knit</option>
                        <option value="painting">Painting</option>
                        <option value="pom-poms">Pom Poms</option>
                    </select>
                </label></p>
                <p><label>Description &nbsp;
                    <textarea name="description" />
                </label></p>
                <p><label>Date Started &nbsp;
                    <input type="date" name="date-started" />
                </label></p>
                <p><label>Date Completed &nbsp;
                    <input type="date" name="date-completed" />
                </label></p>
                <p><label>Date Sold &nbsp;
                    <input type="date" name="date-sold" />
                </label></p>
                <p><label>Price $
                    <input type="number" name="price" min="0"/>
                </label></p>
                <p><label>Notes &nbsp;
                    <textarea name="notes" />
                </label></p>
                <input type="submit"/><br /><br /><br />
            </div>
        )
    }
}

export default CraftForm