var React = require("react");

var Header = React.createClass({
    
    render: function() {
        
        
        var divStyle ={
            backgroundColor: "#0288D1",
            margin: "auto"
            
        }
        var headerStyle = {
            marginLeft: 15
        }
        var socialStyle = {
            marginTop: 35,
            textAlign: "right",
            marginRight: 20
            
        }
        var imgStyle = {
            height: 30,
            width: 30,
            marginLeft: 15
        }
        
        return (
          
          <div> 
            <div className="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
                <button className="menu-icon" type="button" data-toggle></button>
                <div className="title-bar-title">Menu</div>
            </div>

                <div className="top-bar" id="main-menu">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                    <li className="menu-text">CSC 490 Prototype Website</li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu" data-responsive-menu="drilldown medium-dropdown">
                    <li className="has-submenu">
                        <a href="#">One</a>
                        <ul className="submenu menu vertical" data-submenu>
                        <li><a href="#">One</a></li>
                        <li><a href="#">Two</a></li>
                        <li><a href="#">Three</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Two</a></li>
                    <li><a href="#">Three</a></li>
                    </ul>
                </div>
            </div>
        </div>
      
        );
    }
});

module.exports = Header;
 