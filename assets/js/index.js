var React = require('react')
var ReactDOM = require('react-dom')
// import React, { Component } from 'react';


var Hello = React.createClass ({
    render: function () {
        return (
            <p>
            Hello, Reactor!
            </p>
        )
    }
})


// export class MapList extends Component {
//     render() {
//         return (
//             <div></div>
//         );
//     }
// }

// export class MapCategory extends Component {
//     render() {
//         return (
//             <div></div>
//         );
//     }
// }

// export class MapSubCategory extends Component {
//     render() {
//         return (
//             <div></div>
//         );
//     }
// }

// export class MapItem extends Component {
//     render() {
//         return (
//             <div></div>
//         );
//     }
// }





ReactDOM.render(<Hello />, document.getElementById('container'))
