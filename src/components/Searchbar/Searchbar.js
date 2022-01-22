import { Component } from "react";
// import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    searchName: "",
  };

  handleChange = (evt) => {
    this.setState({ searchName: evt.target.value });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.searchName}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
