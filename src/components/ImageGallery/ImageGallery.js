import { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import pixabayApi from "../../servises/pixabayApi";
import { List } from "./ImageGallery.styled";

class ImageGallery extends Component {
  state = {
    pictures: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      const pictures = await pixabayApi(this.props.searchName);
      this.setState({ pictures: pictures.hits });
    }
  }

  render() {
    return (
      <List>
        {this.state.pictures && (
          <ImageGalleryItem pictures={this.state.pictures} />
        )}
      </List>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  searchName: PropTypes.string.isRequired,
};
