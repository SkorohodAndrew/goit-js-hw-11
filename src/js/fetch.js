import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGES = 40;
const KEY = '29414226-e56ab89f6667b3612bf4ca3ef';

const fetchPictures = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGES}&page=${page}`
  );
  return response.data;
};
export default fetchPictures;
