import { useState } from "react";
import PropTypes from "prop-types";
import { Searchbar, SearchForm, Button, Icon, Input } from "./Searchbar.styled";

function SearchBar({ onSubmit }) {
  const [searchName, setSearchName] = useState("");

  const handleChange = (evt) => {
    setSearchName(evt.target.value.toLowerCase());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (searchName.trim() === "") {
      return;
    }
    onSubmit(searchName);
    setSearchName("");
  };

  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <Icon />
        </Button>

        <Input
          onChange={handleChange}
          value={searchName}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Searchbar>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
