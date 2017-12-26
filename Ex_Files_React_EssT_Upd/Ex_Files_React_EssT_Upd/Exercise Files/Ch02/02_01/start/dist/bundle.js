'use strict';

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamilt: 'Verdana'
};
var title = createElement('h1', { id: 'title', className: 'header', style: style }, 'hello jason wolf!!!!');

render(React.createElement(
    'h1',
    { id: 'title',
        className: 'header',
        style: style },
    'Hello World'
), document.getElementById('react-container'));
