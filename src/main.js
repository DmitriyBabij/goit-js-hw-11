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
      console.log('Fetching images for query:', query); // Логування запиту
      const images = await fetchImages(query);
      console.log('Images fetched:', images); // Логування отриманих зображень
      renderGallery(images);
    } catch (error) {
      console.error('Error during fetch:', error); // Логування помилки
      showNoResultsMessage(); // Показуємо повідомлення, якщо немає зображень
    } finally {
      hideLoadingIndicator();
    }
  });
});