var ReactDOM = require('react-dom')
var React = require('react')

var Hello = React.createClass({
    render: function() {
        return <p>Hello there</p>
    }
})

var MapList = React.createClass({
    render: function () {
        return <h1>Hello, {this.props.name}</h1>
    }
});

var MapCategory = React.createClass({
    render: function () {
        return <h1>Hello, {this.props.name}</h1>
    }
});

var MapSubCategory = React.createClass({
    render: function () {
        return <h1>Hello, {this.props.name}</h1>
    }
});

var MapItem = React.createClass({
    render: function () {
        return <h1>Hello, {this.props.name}</h1>
    }
});


ReactDOM.render(
  <Hello/>,
  document.getElementById('react-container')
);
