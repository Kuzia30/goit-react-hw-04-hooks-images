import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import pixabayApi from "../../servises/pixabayApi";
import Loader from "../Loader";
import { List } from "./ImageGallery.styled";
import Button from "../Button";

function ImageGallery({ searchName, showPicture, page, incrementPage }) {
  const [pictures, setPictures] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (page === 1) {
          setPictures([]);
        }
        setStatus("pending");
        const pictures = await pixabayApi(searchName, page);
        if (pictures.total === 0) {
          return await Promise.reject(new Error("Try another name"));
        }

        if (page === 1) {
          setPictures(pictures.hits);
        } else {
          setPictures((prevstate) => [...prevstate, ...pictures.hits]);
          window.scrollBy({
            top: 200,
            behavior: "smooth",
          });
        }
        setStatus("resolved");
      } catch (error) {
        setStatus("rejected");
        setError(error.message);
      }
    }

    if (searchName) {
      fetchData();
    }
  }, [page, searchName]);

  if (status === "idle") {
    return <h2>Enter name</h2>;
  }

  if (status === "resolved") {
    return (
      <>
        <List>
          <ImageGalleryItem pictures={pictures} showPicture={showPicture} />
        </List>
        <Button onLoadMore={incrementPage} />
      </>
    );
  }

  if (status === "pending") {
    if (pictures.length !== 0) {
      return (
        <>
          <List>
            <ImageGalleryItem pictures={pictures} />
          </List>
          <Loader />
        </>
      );
    }
    return <Loader />;
  }
  if (status === "rejected") {
    return <h2>{error}</h2>;
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  searchName: PropTypes.string.isRequired,
  showPicture: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  incrementPage: PropTypes.func.isRequired,
};
