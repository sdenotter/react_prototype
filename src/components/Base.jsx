var React = require("react");
var Header = require("./Header.jsx")

var Base = React.createClass({
    render: function() {
        return  (
            <div>
                <Header />
                {this.props.children}
                <h1>Footer</h1>
            </div>
        );
    }
});

module.exports = Base;