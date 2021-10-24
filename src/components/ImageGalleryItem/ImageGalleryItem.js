import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

export default function ImageGalleryItem ({src, alt, largeImageUrl}){
    
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
       
        setModalOpen(!modalOpen);
        };

        return (
            <li className="ImageGalleryItem">
                <img
                    onClick={toggleModal}
                    src={src}
                    alt={alt}
                    className="ImageGalleryItem-image"
                />
                {modalOpen && (<Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />)}
            </li>
        );
    
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
};
