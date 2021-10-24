import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23122721-ac4409033b31871735d6c9bbc';

const pixabayFetchPhoto = (query, currentPage) => {
    return axios
        .get(
            `${BASE_URL}?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(response => response.data.hits);
};


pixabayFetchPhoto.propTypes = {
    query: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
};


export default pixabayFetchPhoto;