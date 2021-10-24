import './App.css';
import React, { Component } from 'react';

import pixabayFetchPhoto from './services/pixabay';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import LoaderSpinner from './components/Loader/Loader';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    search: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchPhoto();
    }
  }

  handleSubmit = newSearch => {
    this.setState({ search: newSearch, currentPage: 1, images: [], error: null });
  };

  fetchPhoto = () => {
    const { search, currentPage } = this.state;

    this.setState({ isLoading: true });

    pixabayFetchPhoto(search, currentPage)
      .then(gallery => {
        this.setState(prevState => ({
          images: [...prevState.images, ...gallery],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.onLoadMoreButtonClick();
        this.setState({ isLoading: false });
      });
      
  };

  onLoadMoreButtonClick = () => {
    if (this.state.currentPage > 2) {
      const options = {
        top: null,
        behavior: 'smooth',
      };

      options.top = window.pageYOffset + document.documentElement.clientHeight;
      setTimeout(() => {
        window.scrollTo(options);
      }, 500);
    }
  };

  render() {
    return (
      <div className="App">
       
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.error && (<p>No matches found! Try again!</p>)}
        {this.state.isLoading && (
          <LoaderSpinner/>
        )}
        <ImageGallery images={this.state.images} />
        {this.state.search && this.state.images.length > 11 && (
            <Button onClick={this.fetchPhoto}/>
        )}
      </div>
    );
  }
}

