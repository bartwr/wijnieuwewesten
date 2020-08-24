import React, {Component} from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'

import {myWheelsCars} from '../mapdata/mywheels.js';
import {snappCarCars} from '../mapdata/snapCarCars.js';

const carIcon = L.icon({
  // iconUrl: './assets/icon/mywheels.png',
  iconUrl: '/markers/cars.svg',
  shadowUrl: '',

  iconSize:     [20, 20], // size of the icon
  shadowSize:   [20, 20], // size of the shadow
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -100] // point from which the popup should open relative to the iconAnchor
})

const myWheelsIcon = L.icon({
  // iconUrl: './assets/icon/mywheels.png',
  iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/d4/e3/dd/d4e3ddd3-3663-f674-17fb-eaa8859eb04a/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220.png/460x0w.png',
  shadowUrl: '',

  iconSize:     [50, 50], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -100] // point from which the popup should open relative to the iconAnchor
});

const snappCarIcon = L.icon({
  // iconUrl: './assets/icon/snappcar.png',
  iconUrl: 'http://is5.mzstatic.com/image/thumb/Purple7/v4/f7/87/36/f78736d4-d1f2-d74e-a71e-6673b5dc6cf6/source/350x350bb.jpg',
  shadowUrl: '',

  iconSize:     [50, 50], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let carMarkers = []

myWheelsCars.map((car) => {
  carMarkers.push(<Marker
    icon={carIcon}
    title={car.alias}
    url={'https://mywheels.nl/auto-huren/rotterdam/' + car.id}
    image={'https://mywheels.nl/' + car.pictures[0].large}
    key={car.alias}
    position={[car.latitude, car.longitude]}
    >
    <Popup>{car.alias}<img src={'https://mywheels.nl/' + car.pictures[0].large} width="400" /></Popup>
  </Marker>)
})

snappCarCars.map((car) => {
  carMarkers.push(<Marker
    icon={carIcon}
    title={car.car.make + ' ' + car.car.model}
    url={'https://www.snappcar.nl/auto-huren/auto/deelauto/' + car.ci}
    image={car.car.images[0]}
    key={car.ci}
    position={[car.latitude, car.longitude]}
    >
    <Popup>{car.car.make + ' ' + car.car.model}<img src={car.car.images[0]} /></Popup>
  </Marker>)
})

export {carMarkers}
