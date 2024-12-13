const API_KEY = "47491725-6916c20f65c7c72c223d91484";
const BASE_URL = "https://pixabay.com/api/";

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {  // Перевірка на успішний статус відповіді (200)
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();  // Якщо статус успішний, парсимо JSON
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;  // Прокидаємо помилку
    });
}