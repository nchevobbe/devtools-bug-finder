const React = require('react');
const ReactDOM = require('react-dom');
const { connect } =  require('react-redux')

const ComponentsSidebar = require("./ComponentsSidebar");
const BugList = require("./BugList.jsx");
const ContributorsSidebar = require("./ContributorsSidebar.jsx");

const actions = require("../actions");

class Main extends React.Component {
  componentWillMount() {

  }

  render() {
    const {
      loadContributions,
      contributors,
    } = this.props;

    return(
      <React.Fragment>
        <ComponentsSidebar />
        <BugList />
        <ContributorsSidebar contributors={contributors} loadContributions={loadContributions}/>
      </React.Fragment>
    );
  }
 }

module.exports = connect(
  function mapStateToProps(state) {
    return {
      contributors: state.contributors
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      loadContributions: () => actions.loadContributions(dispatch)
    };
  },
)(Main);