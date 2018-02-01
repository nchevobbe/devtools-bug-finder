const React = require('react');
const ReactDOM = require('react-dom');

class BugList extends React.Component {
  render() {
    return (
      <div className="main">
        <ul className="bugs box loading"></ul>
      </div>
    );
  }
 }

module.exports = BugList;