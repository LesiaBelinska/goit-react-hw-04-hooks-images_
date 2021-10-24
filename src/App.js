import './App.css';
import { useState, useEffect } from 'react';

import pixabayFetchPhoto from './services/pixabay';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import LoaderSpinner from './components/Loader/Loader';

export default function App() {

  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  if (!search) {
    return;
  }
    
   setIsLoading(true);
pixabayFetchPhoto(search, currentPage)
  .then(gallery => {
    setImages(prevState => [...prevState, ...gallery]);
  })
  .catch(error => {
    setError(error);
  })
  .finally(() => {
    //onLoadMoreButtonClick();
    setIsLoading(false);
  });
  }, [currentPage, search]);
  
  const onLoadMoreButtonClick = () => {
    setCurrentPage(prevState => prevState + 1);
    const options = {
          top: null,
          behavior: 'smooth',
        };

        options.top = window.pageYOffset + document.documentElement.clientHeight;
        setTimeout(() => {
          window.scrollTo(options);
        }, 500);
    };

  const handleSubmit = newSearch => {
    if (newSearch === search) {
      return;
    }
    setSearch(newSearch);
    setCurrentPage(1);
    setImages([]);
  };
    
  
   return (
      <div className="App">
       
        <Searchbar onSubmit={handleSubmit} />
        {error && (<p>No matches found! Try again!</p>)}
        {isLoading && (
          <LoaderSpinner />
        )}
        <ImageGallery images={images} />
        {search && images.length > 11 && (
          <Button onClick={onLoadMoreButtonClick} />
        )}
      </div>
    ); 
}

  


  
  