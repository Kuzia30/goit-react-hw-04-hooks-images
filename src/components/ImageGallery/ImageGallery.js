import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import pixabayApi from "../../servises/pixabayApi";

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
      <ul className="gallery">
        {this.state.pictures && (
          <ImageGalleryItem pictures={this.state.pictures} />
        )}
      </ul>
    );
  }
}

export default ImageGallery;
