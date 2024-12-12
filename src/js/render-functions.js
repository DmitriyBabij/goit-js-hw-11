import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.gallery a');

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  
  // Очищаємо галерею перед додаванням нових зображень
  gallery.innerHTML = '';

  if (images.length === 0) {
    // Якщо зображення не знайдені, показуємо повідомлення і не додаємо елементи в галерею
    showNoResultsMessage();
    return;
  }

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
  
  // Вставляємо нові зображення в галерею
  gallery.insertAdjacentHTML('beforeend', markup);

  // Оновлюємо lightbox після оновлення галереї
  lightbox.refresh();
}

export function showNoResultsMessage() {
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