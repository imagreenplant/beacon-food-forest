var ReactDOM = require('react-dom')
var React = require('react')

var Hello = React.createClass({
    render: function() {
        return <p>Hello there {this.props.name}</p>
    }
})

var MapList = React.createClass({
    render: function() {
        var firstplant, fplant = "";
        if (this.props.itemlist) {
            firstplant = this.props.itemlist['1303'].name;
            console.log(firstplant + "!!!");
            fplant = this.props.itemlist['1303'];

        }
        else {
            firstplant = "Ruube"
        }
        return( 
            <div>
            <p>{firstplant}</p>
            <p><MapItem item={fplant} /></p>
            </div>

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
        return 
        <div class="category-name">
                <input type="checkbox" class="checkbox" checked="" onclick="" />
                <span title="" oncontextmenu="" onclick=""><i class="fa fa-plus" aria-hidden="true"></i></span>
                <a href="#" onclick="">this.props.category.name</a>
        </div>
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
            data-position={this.props.item.coordinates}   // Shows as [object]
            data-content="">
            {this.props.item.name}
        </li>
        );
    }
});

var MapItemContent = React.createClass({
    render: function () {
        return 
        <li data-position="{this.props.item.coordinates}">{this.props.item.name}


        </li>
    }
});

// function NumberList(props) {
//   const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) =>
//         <ListItem key={number.toString()}
//                   value={number} />
//       )}
//     </ul>
//   );
// }


ReactDOM.render(
  <MapList itemlist={plants} />,
  document.getElementById('react-container')
);
