var React = require("react");

var NewsItem = React.createClass({
    render: function() {
        
        
 /* News Properties
 
        1) Article title
        2) Article subtitle
        3) Article text content
        4) 1-2 thumbnail images
        5) Location of Article post
        6) Profile photo
        
  */
  
  
        
        return (
            <div className = "panel panel-primary">
                <div className = "row">
                    <div className = "col-sm-2">
                        <div>
                            <img src={this.props.profile} height="50" width="100"></img>
                        </div>
                    </div>
                    <div className = "col-sm-10">
                        <h1>{this.props.title}</h1>
                        <h4>{this.props.subtitle}</h4>
                    </div>
                    
                </div>
                <div className = "row">
                    <div className = "col-sm-10 col-sm-offset-2">
                            <p>{this.props.text}</p>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-sm-3 col-sm-3-offset-2">
                        <div>
                            <img src = {this.props.thumb}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
});

module.exports= NewsItem;