import React, {Component} from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import * as R from 'ramda';
import { withTracker } from 'meteor/react-meteor-data';

// import NewArticle from '../NewArticle/NewArticle.jsx';

import { Articles } from '/imports/models/Articles.js';

import {carMarkers} from './markers/cars.js';

import './Map.css';

// WORM https://thenounproject.com/search/?q=worm&i=1618075
class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newArticleMarkerPosition: [50, 0]
    }
  }
  onMapClick(e) {
    this.setState({
      newArticleMarkerPosition: [e.latlng.lat, e.latlng.lng]
    })
  }
  newArticleMarker() {
    return (
      <Marker position={this.state.newArticleMarkerPosition}>
        <Popup>
          <button onClick={() => {
            FlowRouter.go(`/nieuw?lat=${this.state.newArticleMarkerPosition[0]}&lng=${this.state.newArticleMarkerPosition[1]}`)
          }}>Nieuw</button>
        </Popup>
      </Marker>
    )
  }
  renderArticleMarkers() {
    return R.map((article) => {
      return <Marker
        key={article._id}
        position={[article.lat, article.lng]}
        >
        <Popup>
          {article.title}
        </Popup>
      </Marker>
    }, this.props.articles)
  }
  render() {
    // --
    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    // attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    // --
    // url={`https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=OPWomCbfFacGiy11bQnKgbyr7I9hPvoqLzpJKCQV3FtGrV3ylhNnsLbrwmmWv2y2`}
    // --
    // url={`https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`}
    // attribution={`Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community`}
    const position = [51.9173209, 4.4529677]
    const map = (
      <LeafletMap
        center={position}
        zoom={15}
        onClick={this.onMapClick.bind(this)}
        >
        <TileLayer
          minZoom="14"
          maxZoom="19"
          url={`https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`}
        />
        {carMarkers}
        {this.renderArticleMarkers()}
        {this.newArticleMarker()}
      </LeafletMap>
    )
    return <div className="Map">
      {map}
    </div>;
  }
}

export default withTracker((props) => {
  // Meteor.subscribe('articles.all.public')

  return {
    articles: Articles.find({}).fetch()
  }
})(Map);
