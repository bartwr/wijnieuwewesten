import React, {Component} from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'

// WORM https://thenounproject.com/search/?q=worm&i=1618075

import {myWheelsCars} from './mapdata/mywheels.js';
import {snappCarCars} from './mapdata/snapCarCars.js';

import './Map.css';

class Map extends Component {
  render() {
    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    // attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    // url={`https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`}
    // attribution={`Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community`}
    const position = [51.9173209, 4.4529677]

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

    const accessToken = process.env.JAWG_ACCESS_TOKEN;

    return <LeafletMap center={position} zoom={15}>
      <TileLayer
        minZoom="14"
        maxZoom="22"
        url={`https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=OPWomCbfFacGiy11bQnKgbyr7I9hPvoqLzpJKCQV3FtGrV3ylhNnsLbrwmmWv2y2`}
      />
      {myWheelsCars.map((car) => {
        return <Marker
          icon={myWheelsIcon}
          title={car.alias}
          url={'https://mywheels.nl/auto-huren/rotterdam/' + car.id}
          image={'https://mywheels.nl/' + car.pictures[0].large}
          key={car.alias}
          position={[car.latitude, car.longitude]}
          >
          <Popup>{car.alias}<img src={'https://mywheels.nl/' + car.pictures[0].large} width="400" /></Popup>
        </Marker>
      })}
      {snappCarCars.map((car) => {
        return <Marker
          icon={snappCarIcon}
          title={car.car.make + ' ' + car.car.model}
          url={'https://www.snappcar.nl/auto-huren/auto/deelauto/' + car.ci}
          image={car.car.images[0]}
          key={car.car.make + ' ' + car.car.model}
          position={[car.latitude, car.longitude]}
          >
          <Popup>{car.car.make + ' ' + car.car.model}<img src={car.car.images[0]} /></Popup>
        </Marker>
      })}
    </LeafletMap>
  }
}

export default Map;
