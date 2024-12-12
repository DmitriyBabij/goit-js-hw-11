import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages, showNoResultsMessage } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Знаходимо елементи
const form = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const loader = document.querySelector('.loader'); // Індикатор завантаження

// Функція для відправлення запиту
const handleFormSubmit = async (event) => {
  event.preventDefault();

  const searchQuery = searchInput.value.trim();

  // Перевірка на порожній запит
  if (!searchQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
  }

  // Показуємо індикатор завантаження
  loader.style.display = 'block';

  // Очищаємо галерею перед новим пошуком (це має бути зроблено перед запитом)
  clearGallery();

  try {
    // Отримуємо зображення
    const images = await fetchImages(searchQuery);

    // Якщо зображення є, рендеримо їх
    if (images.length > 0) {
      renderImages(images);
    } else {
      showNoResultsMessage();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
    });
  } finally {
    // Сховуємо індикатор завантаження
    loader.style.display = 'none';
  }
};

// Додаємо обробник події на форму
form.addEventListener('submit', handleFormSubmit);