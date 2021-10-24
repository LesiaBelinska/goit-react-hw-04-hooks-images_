import { useState } from 'react';
import PropTypes from 'prop-types';


export default function Searchbar({onSubmit}){

    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(
            e.currentTarget.value.toLowerCase()
        );
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit(query);
        setQuery('');
    };

        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        value={query}
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                    />
                </form>
            </header>
        );
   
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

