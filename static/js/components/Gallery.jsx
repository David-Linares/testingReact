/**
 * Created by david on 16/03/17.
 */
var React = require('react');
var ReactDom = require('react-dom');
var ImageResult = require('./ImageResult.jsx');

var Gallery = React.createClass({
    render:function(){
        return(
            <section id="gallery" className="gallery">
                {this.props.items.map(function(crrvalue, index, array){
                    if (crrvalue.webformatWidth > crrvalue.webformatHeight && (crrvalue.webformatWidth - crrvalue.webformatHeight ) < 250){
                        return <ImageResult value={crrvalue.webformatURL} link={crrvalue.pageURL} key={index}/>
                    }
                })}
            </section>
        )
    }
})

module.exports = Gallery;