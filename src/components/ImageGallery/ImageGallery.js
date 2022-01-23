import { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import pixabayApi from "../../servises/pixabayApi";
import { Oval } from "react-loader-spinner";
import { List } from "./ImageGallery.styled";

class ImageGallery extends Component {
  state = {
    pictures: null,
    status: "idle",
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      try {
        this.setState({ status: "pending" });
        const pictures = await pixabayApi(this.props.searchName);
        if (pictures.total === 0) {
          return await Promise.reject(new Error("Try another name"));
        }
        this.setState({ pictures: pictures.hits, status: "resolved" });
      } catch (error) {
        this.setState({ status: "rejected", error: error.message });
      }
    }
  }

  render() {
    const { pictures, status, error } = this.state;
    if (status === "idle") {
      return <h2>Enter name</h2>;
    }

    if (status === "resolved") {
      return (
        <List>
          <ImageGalleryItem pictures={pictures} />
        </List>
      );
    }

    if (status === "pending") {
      return <Oval color="#00BFFF" height={80} width={80} />;
    }
    if (status === "rejected") {
      return <h2>{error}</h2>;
    }
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  searchName: PropTypes.string.isRequired,
};
