/**
 * Created by david on 16/03/17.
 */
var React = require('react');
var ReactDom = require('react-dom');

var ImageResult = React.createClass({
    render:function(){
        return(
            <div>
                <a href={this.props.link}>
                    <img src={this.props.value}></img>
                </a>
            </div>
        )
    }
})

module.exports = ImageResult;