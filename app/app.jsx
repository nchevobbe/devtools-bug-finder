const React = require('react');
const ReactDOM = require('react-dom');
const Main = require("./components/Main.jsx");
const {applyMiddleware, createStore} = require("redux")
const { Provider } = require('react-redux')
const logger = require("redux-logger");

const reducer = require("./reducer")
let store = createStore(reducer, applyMiddleware(logger.default));

console.error("Error")
console.warn("Warning")
console.dir(document.location)

ReactDOM.render(
  <Provider store={store}><Main /></Provider>,
  document.querySelector('main')
);