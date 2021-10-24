import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

export default function ImageGallery({ images }) {
    return (
        <ul className="ImageGallery">
            {images.map((image) => (
                <ImageGalleryItem
                    src={image.webformatURL}
                    alt={image.tags}
                    largeImageUrl={image.largeImageURL}
                    key={image.id}
                />
            ))}
  
        </ul>
    );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
};