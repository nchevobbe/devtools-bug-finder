const React = require('react');
const ReactDOM = require('react-dom');

class ComponentsSidebar extends React.Component {
  onFilterChange(e) {
    const {searchBug} = this.props;
    searchBug({
      [e.target.name]: e.target.value
    });
  }

  onComponentChange(e) {
    const {searchBug} = this.props;
    searchBug({
      component: e.target.value
    });
  }

  renderSearchInput() {
    return (
      <div className="separated">
        <input className="search-input" name="search" type="text" placeholder="Search displayed bugs" />
      </div>
    );
  }

  renderCheckboxes() {
    return (
      <ul className="filter-list filters separated">
        <li key="good-first">
          <input
            id="good-first"
            name="easy"
            type="checkbox"
            value="good-first"
            defaultChecked
            onChange={this.onFilterChange} />
          <label htmlFor="good-first">Good first bugs</label>
        </li>
        <li key="mentored">
          <input
            id="mentored"
            name="mentored"
            type="checkbox"
            value="mentored"onChange={this.onFilterChange} />
          <label htmlFor="mentored">Mentored bugs</label>
        </li>
      </ul>
    );
  }

  renderComponents() {
    return (
      <ul className="tools-list filters separated">
        {this.renderComponent("All tools", true)}
        <React.Fragment>{
          Object.values(COMPONENT_MAPPING).map(({label}) =>
            this.renderComponent(label))
        }
        </React.Fragment>
      </ul>
    );
  }

  renderComponent(label, defaultChecked) {
    return(
      <li key={label}>
        <input
          type="radio"
          id={label}
          name="tool"
          value={label}
          defaultChecked={defaultChecked}
          onChange={this.onComponentChange}
        />
        <label htmlFor={label}>{label}</label>
      </li>
    )
  }

  render() {
    const searchInput = this.renderSearchInput();
    const checkboxes = this.renderCheckboxes();
    const components = this.renderComponents();

    return(
      <aside className="sidebar box">
        {searchInput}
        {checkboxes}
        {components}
      </aside>
    );
  }
 }

module.exports = ComponentsSidebar;