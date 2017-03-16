/**
 * Created by david on 16/03/17.
 */
var React = require('react');
var ReactDom = require('react-dom');
var InputField = require('./InputField.jsx');

var Main = React.createClass({
    render:function(){
        return(
            <div>
                <InputField/>
            </div>
        )
    }
})

module.exports = Main;