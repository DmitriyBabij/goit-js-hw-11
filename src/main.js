import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showNoResultsMessage, showLoadingIndicator, hideLoadingIndicator } from './js/render-functions.js';

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
      const images = await fetchImages(query);
      renderGallery(images);
    } catch (error) {
      showNoResultsMessage(); // Відображаємо повідомлення про відсутність результатів
    } finally {
      hideLoadingIndicator();
    }
  });
});