/**
 * Created by david on 16/03/17.
 */
var React = require('react');
var ReactDom = require('react-dom');
var Gallery = require('./Gallery.jsx');
var superagent = require('superagent');

var InputField = React.createClass({
    getInitialState: function(){
        return {
            items: [],
            url: 'https://pixabay.com/api/'
        }
    },
    onClick:function(event){
        superagent.get(this.state.url).query({
            image_type: 'photo',
            min_width: '300',
            min_height: '300',
            q: document.getElementById('finder').value,
            key: "3438575-9e90c9c6bdcc7c533aee92749"
        }).then((response) => {
            console.log(response.body);
            this.setState({
                items: response.body.hits
            })
        });
    },
    render:function(){
        return(
            <div>
                <section className="finder">
                    <input id="finder" type="text" placeholder="Search term" />
                    <button id="searchButton" className="finder__search-button" onClick={this.onClick}>Search</button>
                </section>
                <Gallery items={this.state.items}/>
            </div>
        )
    }
})

module.exports = InputField;