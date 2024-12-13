import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showNoResultsMessage, showLoadingIndicator, hideLoadingIndicator } from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-input');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();

    // Перевірка, чи введено запит
    if (query === '') {
      iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search term.',
      });
      return;
    }

    // Очищаємо старі результати перед новим пошуком
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';  // Очищаємо галерею

    showLoadingIndicator();  // Показуємо індикатор завантаження

    try {
      const data = await fetchImages(query);  // Отримуємо дані з API

      // Перевірка на наявність зображень
      if (data.hits.length === 0) {
        showNoResultsMessage();  // Якщо зображень немає, показуємо повідомлення
        return;
      }

      renderGallery(data.hits);  // Якщо зображення є, рендеримо їх
    } catch (error) {
      showNoResultsMessage();  // Показуємо повідомлення про помилку
    } finally {
      hideLoadingIndicator();  // Сховуємо індикатор завантаження
    }
  });
});