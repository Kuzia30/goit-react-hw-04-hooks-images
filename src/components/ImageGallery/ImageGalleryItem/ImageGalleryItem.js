import PropTypes from "prop-types";
import { Item, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ pictures, showPicture }) => {
  return pictures.map(({ id, webformatURL, largeImageURL }) => (
    <Item key={id}>
      <Image
        src={webformatURL}
        alt={`card ${id}`}
        onClick={showPicture}
        data-url={largeImageURL}
      />
    </Item>
  ));
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array.isRequired,
  showPicture: PropTypes.func,
};
