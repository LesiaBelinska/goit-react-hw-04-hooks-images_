import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

export default class ImageGalleryItem extends Component{
    state = {
        isModalOpen: false,
    };

    toggleModal = () => {
        this.setState(({ isModalOpen }) => ({
            isModalOpen: !isModalOpen,
        }));
    }

    render() {
        const { src, alt, largeImageUrl } = this.props;
        const { isModalOpen } = this.state;
        return (
            <li className="ImageGalleryItem">
                <img
                    onClick={this.toggleModal}
                    src={src}
                    alt={alt}
                    className="ImageGalleryItem-image"
                />
                {isModalOpen && (<Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />)}
            </li>
        );
    }
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
};
