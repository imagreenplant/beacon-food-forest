import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ReactDOM from 'react-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

let message = 'es6 webpack!'; // so fancy  
console.log(message);  

class SimpleMap extends Component {
  // defaultProps = {
  //   center: {lat: 59.95, lng: 30.33},
  //   zoom: 11
  // };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={{lat: 59.95, lng: 30.33}}
        defaultZoom={11}
        bootstrapURLKeys={{key: "AIzaSyAsnOLu3eLbo60hkQNWo-3EEt102mOv99w"}}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}

// class UserName extends React.Component {  
//   render() {
//     return <div>name: {this.props.name}</div>;
//   }
// }

// class User extends React.Component {  
//   render() {
//     return <div>
//         <h1>City: {this.props.user.city}</h1>
//         <UserName name={this.props.user.name} />
//       </div>;
//   }
// }

// var user = { name: 'John', city: 'San Francisco' };  
// React.render(<User user={user} />, document.getElementById('the_side_bar'));
/*
 * Base Google Map example
 */
// import React, {PropTypes, Component} from 'react';
// // import shouldPureComponentUpdate from 'react-pure-render/function';

// import GoogleMap from 'google-map-react';
// // import MyGreatPlace from './my_great_place.jsx';

// function createMapOptions(maps) {
//   // next props are exposed at maps
//   // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
//   // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
//   // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
//   // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
//   // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
//   return {
//     zoomControlOptions: {
//       position: maps.ControlPosition.RIGHT_CENTER,
//       style: maps.ZoomControlStyle.SMALL
//     },
//     mapTypeControlOptions: {
//       position: maps.ControlPosition.TOP_RIGHT
//     },
//     mapTypeControl: true
//   };
// }

// export default class SimpleMapPage extends Component {
//   static propTypes: {
//     center: PropTypes.array,
//     zoom: PropTypes.number,
//     greatPlaceCoords: PropTypes.any
//   };

//   static defaultProps: {
//     center: [59.938043, 30.337157],
//     zoom: 9,
//     greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
//   };

//   // shouldComponentUpdate = shouldPureComponentUpdate;

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//        <GoogleMap
//         apiKey="AIzaSyAsnOLu3eLbo60hkQNWo-3EEt102mOv99w" // set if you need stats etc ...
//         center=[59.938043, 30.337157]
//         zoom=9
//         options={createMapOptions}>
//         <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
//         <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
//       </GoogleMap>
//     );
//   }
// }


ReactDOM.render(
  <div style={{width: '100%', height: '400px'}}>
    <SimpleMap/>
  </div>,
  document.getElementById('map-canvas')
);