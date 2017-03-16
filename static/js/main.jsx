/**
 *
 * This is where you should put your code to make this app
 *
 * as an exemplar URL to search terms in pixabay, you could use this to test
 * https://pixabay.com/api/?key=3438575-9e90c9c6bdcc7c533aee92749&q=sea&image_type=photo
 */

var React = require('react');
var ReactDom = require('react-dom');
var Main = require('./components/Main.jsx');

ReactDom.render(<Main/>, document.getElementById('gallery'));