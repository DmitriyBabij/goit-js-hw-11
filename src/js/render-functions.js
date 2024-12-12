import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

// Функція для очищення галереї
export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Очищаємо попередні результати
};

// Функція для відображення карток зображень
export const renderImages = (images) => {
  const gallery = document.querySelector('.gallery');
  
  images.forEach(image => {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;

    const imageCard = document.createElement('div');
    imageCard.classList.add('gallery-item');
    
    imageCard.innerHTML = `
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="info">
        <p><strong>Likes:</strong> ${likes}</p>
        <p><strong>Views:</strong> ${views}</p>
        <p><strong>Comments:</strong> ${comments}</p>
        <p><strong>Downloads:</strong> ${downloads}</p>
      </div>
    `;
    
    gallery.appendChild(imageCard);
  });

  // Оновлюємо SimpleLightbox для нових зображень
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};

// Функція для показу повідомлення про відсутність зображень
export const showNoResultsMessage = () => {
  iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
  });
};