const ImageGalleryItem = ({ pictures }) => {
  return pictures.map(({ id, webformatURL, largeImageURL }) => (
    <li className="gallery-item" key={id}>
      <img src={webformatURL} alt={webformatURL} />
    </li>
  ));
};

export default ImageGalleryItem;
