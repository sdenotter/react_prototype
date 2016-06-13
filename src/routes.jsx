var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Base = require("./components/Base.jsx");
var News = require('./components/News.jsx');

var Routes = (
    <Router>
        <Route path ="/" component={Base} >
            <IndexRoute component={News}/>
        </Route>
    </Router>

);

module.exports = Routes;