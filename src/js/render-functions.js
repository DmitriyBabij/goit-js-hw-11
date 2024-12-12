import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Очищаємо галерею перед додаванням нових зображень

  if (images.length === 0) {
    // Якщо зображень немає, показуємо повідомлення про відсутність результатів
    showNoResultsMessage();
    return;
  }

  // Генерація та додавання нових зображень в галерею
  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
        <a href="${largeImageURL}" class="gallery-item">
          <img src="${webformatURL}" alt="${tags}" />
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${likes}</p>
            <p class="info-item"><b>Views:</b> ${views}</p>
            <p class="info-item"><b>Comments:</b> ${comments}</p>
            <p class="info-item"><b>Downloads:</b> ${downloads}</p>
          </div>
        </a>
      `;
    })
    .join('');
  
  gallery.insertAdjacentHTML('beforeend', markup);
  
  lightbox.refresh(); // Оновлюємо лайтбокс після завантаження нових зображень
}

export function showNoResultsMessage() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Очищаємо галерею перед відображенням повідомлення

  iziToast.error({
    title: 'Sorry',
    message: 'There are no images matching your search query. Please try again!',
  });
}

export function showLoadingIndicator() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hidden');
}

export function hideLoadingIndicator() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
}