// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=ru&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=ru`;
const COMADY_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=35&language=ru`;
const ACTION_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=28&language=ru`;
const ROMANCE_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=10749&language=ru`;
const DOKUMENTAL_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=99&language=ru`;

// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}&language=ru`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}&language=ru`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}&language=ru`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w780";

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  COMADY_BASE_URL,
  ACTION_BASE_URL,
  ROMANCE_BASE_URL,
  DOKUMENTAL_BASE_URL,
};
