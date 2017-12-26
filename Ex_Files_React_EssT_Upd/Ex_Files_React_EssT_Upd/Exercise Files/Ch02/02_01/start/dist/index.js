const { createElement } = React
const { render } = ReactDOM

const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamilt: 'Verdana'
}
const title = createElement(
    'h1',
    {id: 'title', className: 'header', style: style},
    'hello jason wolf!!!!'
)

render(
    <h1 id='title'
        className='header'
        style={style}>
    Hello World
    </h1>,
    document.getElementById('react-container')
)
