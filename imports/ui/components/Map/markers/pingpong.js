import React, {Component} from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'

import {pingpongLocations} from '../mapdata/pingpong/pingpong.js';

const pingpongIcon = L.icon({
  // iconUrl: './assets/icon/mywheels.png',
  iconUrl: '/markers/pingpong.svg',
  shadowUrl: '',

  iconSize:     [25, 25], // size of the icon
  shadowSize:   [25, 25], // size of the shadow
  iconAnchor:   [12.5, 12.5], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -100] // point from which the popup should open relative to the iconAnchor
})

let markers = []

pingpongLocations.map((item) => {
  markers.push(<Marker
    icon={pingpongIcon}
    title={item.title}
    url={item.url}
    image={item.image}
    key={item.title}
    position={item.position}
    >
    <Popup>{item.title}</Popup>
  </Marker>)
})

export {markers}
