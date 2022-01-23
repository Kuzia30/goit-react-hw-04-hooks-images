import PropTypes from "prop-types";
import { Item, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ pictures }) => {
  return pictures.map(({ id, webformatURL }) => (
    <Item key={id}>
      <Image src={webformatURL} alt={`card ${id}`} />
    </Item>
  ));
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array.isRequired,
};
