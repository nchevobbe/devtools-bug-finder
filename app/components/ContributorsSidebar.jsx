const React = require('react');
const ReactDOM = require('react-dom');

class ContributorsSidebar extends React.Component {
  componentDidMount() {
    const {loadContributions} = this.props;
    if ( loadContributions ) {
      loadContributions();
    }
  }

  renderContributors(contributors) {
    const sortedContributors = Object.entries(contributors).sort();
    return sortedContributors.map(this.renderContributor);
  }

  renderContributor([name, bugCount]) {
    return (
      <li key={name} className="contributor">
        {name}&nbsp;({bugCount})
      </li>
    );
  }

  renderLoading() {
    return <aside className="sidebar box loading"></aside>;
  }

  render() {
    const {contributors} = this.props;
    if (!contributors) {
      return this.renderLoading();
    }

    const bugNumber = Object.values(contributors).reduce((acc,nb) => acc + nb);

    return(
      <div className="sidebar box">
        <ul id="top-contributors" className="top-contributors">
          <li className="summary">{bugNumber} bugs were fixed by contributors in the last 30 days: </li>
          {this.renderContributors(this.props.contributors)}
        </ul>
      </div>
    );
  }
 }

module.exports = ContributorsSidebar;