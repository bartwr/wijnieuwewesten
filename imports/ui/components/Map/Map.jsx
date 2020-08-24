import React, {Component} from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'

import {carMarkers} from './markers/cars.js';
import {markers as pingpongMarkers} from './markers/pingpong.js';

import './Map.css';

// WORM https://thenounproject.com/search/?q=worm&i=1618075
class Map extends Component {
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
    return <LeafletMap center={position} zoom={15}>
      <TileLayer
        minZoom="14"
        maxZoom="22"
        url={`https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`}
        attribution={`Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community`}
      />
      {carMarkers}
      {pingpongMarkers}
    </LeafletMap>
  }
}

export default Map;
