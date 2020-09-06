import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import * as R from 'ramda';

import './NewArticle.css'

// Import models
import { Tags } from '/imports/models/Tags.js';

// Import components
// import SideNavigation from '../SideNavigation/SideNavigation.jsx'
// import TopNavigation from '../TopNavigation/TopNavigation.jsx'
import FormInput from '../FormInput/FormInput.jsx'
import FormTextArea from '../FormTextArea/FormTextArea.jsx'
import FormSelect from '../FormSelect/FormSelect.jsx'

class NewArticle extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tagId: '',
      title : '',
      text: '',
      location: '',
      url: '',
      imageUrl: '',
      date: ''
    }
  }

  createItem() {
    // Populate form data
    const formData = Object.assign({}, {
      lat: FlowRouter.getQueryParam('lat'),
      lng: FlowRouter.getQueryParam('lng'),
    }, this.state)

    Meteor.call('articles.create', formData, (err, res) => {
      console.log(err, res);
      // FlowRouter.go()
    });
  }

  onChange(e) {
    this.state[e.target.name] = e.target.value
    this.forceUpdate()
  }

  render() {

    const position = [
      FlowRouter.getQueryParam('lat'),
      FlowRouter.getQueryParam('lng')
    ]

    return (
      <div className="p-4">

        <p className="mt-2 mb-4 text-xl text-bold">
          Hoi, leuk dat je iets nieuws op de kaart wilt zetten.
        </p>

        <FormSelect
          name="tagId"
          label="Wat is dit voor iets?"
          onChange={this.onChange.bind(this)}
          >
          <option value="">
            Selecteer een categorie
          </option>
          {R.map((tag) => <option
            key={tag._id}
            value={tag._id}
            >
            {tag.title}
          </option>, this.props.tags)}
        </FormSelect>

        <label
          className="block"
          htmlFor={this.props.name}
          >
          De locatie op de kaart
        </label>

        <LeafletMap
          center={position}
          zoom={18}
          zoomControl={false}
          scrollWheelZoom={false}
          dragging={false}
          >
          <TileLayer
            minZoom="16"
            maxZoom="18"
            url={`https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`}
          />
          <Marker position={position}>
            <Popup>
              {this.state.title}
            </Popup>
          </Marker>
        </LeafletMap>

        <FormInput
          label="Wat is de naam of het adres van de locatie?"
          name="location"
          type="text"
          placeholder="Naam van de locatie, of straatnaam/-nummer"
          onChange={this.onChange.bind(this)}
          />

        <FormInput
          label="Geef een titel"
          name="title"
          type="text"
          onChange={this.onChange.bind(this)}
          />

        <FormTextArea
          label="en een tekst"
          name="text"
          classes="h-64"
          onChange={this.onChange.bind(this)}
          />

        <FormInput
          label="Plaats hier bijvoorbeeld een link naar het initiatief"
          placeholder="https://www.example.com"
          name="url"
          type="text"
          onChange={this.onChange.bind(this)}
          />

        <FormInput
          label="Geef eventueel een afbeeldings-link"
          placeholder="https://www.example.com/afbeelding.png"
          name="imageUrl"
          type="text"
          onChange={this.onChange.bind(this)}
          />

        <FormInput
          label="Voeg eventueel een datum/tijd doe, bijvoorbeeld dat dit een evenement is dat 1x plaatsvindt"
          placeholder="https://www.example.com"
          name="date"
          type="datetime-local"
          onChange={this.onChange.bind(this)}
          />

        <button
          className="
            cursor-pointer
            bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full
          "
          onClick={this.createItem.bind(this)}
          >
          Opslaan
        </button>

        <div className="h-24" />

      </div>
    )
  }

}

export default withTracker((props) => {
  return {
    tags: Tags.find({}, {sort: { 'title': 1 }}).fetch()
  }
})(NewArticle);
