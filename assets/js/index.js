var ReactDOM = require('react-dom')
var React = require('react')

var MapList = React.createClass({
    render: function() {
        var mapItemElements = this.props.itemlist
            .map(function (item) {
                return( <MapItem item={item} /> );
            })
        return( 
            <ul>{mapItemElements}</ul>
        );
    }
});

var MapCategoryList = React.createClass({
    render: function () {
        return <div class="categories">this.props.categories</div>
    }
})

var MapCategory = React.createClass({
    render: function () {
        return(
        <div class="category-name">
                <input type="checkbox" class="checkbox" checked="" onclick="" />
                <span title="" oncontextmenu="" onclick=""><i class="fa fa-plus" aria-hidden="true"></i></span>
                <a href="#" onclick="">this.props.category.name</a>
        </div>
        );
    }
});

var MapSubCategory = React.createClass({
    render: function () {
        return <h1>Hello, {this.props.subcategory.name}</h1>
    }
});

var MapItem = React.createClass({
    render: function () {
        return(
            <li key={this.props.item.site_code}
                data-code={this.props.item.site_code}
                // data-position-latitude={this.props.item.coordinates.lat}
                // data-position-longitude={this.props.item.coordinates.lng}   
                data-content="">
                {this.props.item.name}
                <MapItemContent content={this.props.item.description} />
            </li>
        );
    }
});

var MapItemContent = React.createClass({
    render: function () {
        return(
            <div className="map-item-content">{this.props.content}</div>
        );
    }
});

ReactDOM.render(
  <MapList itemlist={plants} />,
  document.getElementById('react-container')
);
