import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// import './NewArticle.css'

// Import models
// import { Proefabonnees } from '/imports/models/Proefabonnees.js';

// Import components
// import SideNavigation from '../SideNavigation/SideNavigation.jsx'
// import TopNavigation from '../TopNavigation/TopNavigation.jsx'
import FormInput from '../FormInput/FormInput.jsx'
import FormTextArea from '../FormTextArea/FormTextArea.jsx'
import FormSelect from '../FormSelect/FormSelect.jsx'

class NewArticle extends Component {

  render() {
    return (
      <div className="p-4">
        
        <FormSelect
          label="Wat is dit voor iets?"
          >
          <option value="something">Something</option>
        </FormSelect>

        <FormInput
          label="Wat is de locatie?"
          name="location"
          type="text"
          placeholder="Naam van de locatie, of straatnaam/-nummer"
          />

        <FormInput
          label="Geef een titel"
          name="title"
          type="text"
          />

        <FormTextArea
          label="en een tekst"
          name="text"
          classes="h-64"
          />

        <FormInput
          label="Plaats hier bijvoorbeeld een link naar het initiatief"
          placeholder="https://www.example.com"
          name="url"
          type="text"
          />

        <FormInput
          label="Geef eventueel een afbeeldings-link"
          placeholder="https://www.example.com/afbeelding.png"
          name="imageUrl"
          type="text"
          />

        <FormInput
          label="Voeg eventueel een datum/tijd doe, bijvoorbeeld dat dit een evenement is dat 1x plaatsvindt"
          placeholder="https://www.example.com"
          name="date"
          type="datetime-local"
          />

      </div>
    )
  }

}

export default withTracker((props) => {
  return {
    tags: {}
  }
})(NewArticle);
