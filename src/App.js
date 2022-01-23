import { Component } from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
import { AppWrap } from "./App.styled";

class App extends Component {
  state = {
    searchName: "",
    showModal: false,
    card: {},
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleFormSubmit = (searchName) => {
    this.setState({ searchName });
  };

  showPicture = (evt) => {
    this.toggleModal();
    const card = {
      largeImageURL: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.alt,
    };
    this.setState({ card });
  };

  render() {
    const { card, searchName } = this.state;
    return (
      <AppWrap>
        {this.state.showModal && (
          <Modal onToggle={this.toggleModal}>
            <img src={card.largeImageURL} alt={card.alt} />
          </Modal>
        )}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchName={searchName} showPicture={this.showPicture} />
      </AppWrap>
    );
  }
}

export default App;
