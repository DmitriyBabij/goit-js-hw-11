import axios from 'axios';
const API_KEY = "47491725-6916c20f65c7c72c223d91484";
const BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (searchQuery) => {
  const url = 'https://pixabay.com/api/';
  const params = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching images: ", error);
    throw new Error('Something went wrong with the request');
  }
};