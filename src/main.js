import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showNoResultsMessage, showLoadingIndicator, hideLoadingIndicator } from './render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-input');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (query === '') {
      iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search term.',
      });
      return;
    }

    showLoadingIndicator();

    try {
      console.log('Fetching images for query:', query);
      const images = await fetchImages(query);
      console.log('Images fetched:', images);ь
      renderGallery(images);
    } catch (error) {
      console.error('Error during fetch:', error);
      showNoResultsMessage(); 
    } finally {
      hideLoadingIndicator();
    }
  });
});