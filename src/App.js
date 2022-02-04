import { useState } from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
import { AppWrap } from "./App.styled";

function App() {
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [card, setCard] = useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleFormSubmit = (name) => {
    setSearchName(name);
    setPage(1);
  };

  const showPicture = (evt) => {
    toggleModal();
    const cardEl = {
      largeImageURL: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.alt,
    };
    setCard(cardEl);
  };

  return (
    <AppWrap>
      {showModal && (
        <Modal onToggle={toggleModal}>
          <img src={card.largeImageURL} alt={card.alt} />
        </Modal>
      )}
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery
        searchName={searchName}
        showPicture={showPicture}
        incrementPage={() => setPage(page + 1)}
        page={page}
      />
    </AppWrap>
  );
}

export default App;
