import { Component } from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import { AppWrap } from "./App.styled";

class App extends Component {
  state = {
    searchName: "",
  };

  handleFormSubmit = (searchName) => {
    this.setState({ searchName });
  };

  render() {
    return (
      <AppWrap>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchName={this.state.searchName} />
      </AppWrap>
    );
  }
}

export default App;
