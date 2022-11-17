import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '1636f0bce8f7dccd30801ee3d3556064';

export const MovieApi = async () => {
  const response = await axios.get(`trending/movie/day`, {
    params: {
      api_key: KEY,
    },
  });
  return response;
};

export const SearchMovieApi = async query => {
  const response = await axios.get(`search/movie`, {
    params: {
      api_key: KEY,
      query,
    },
  });
  return response;
};

export const InfoMovieApi = async movie_id => {
  const response = await axios.get(`movie/${movie_id}`, {
    params: {
      api_key: KEY,
    },
  });
  return response;
};

export const CastMovieApi = async movie_id => {
  const response = await axios.get(`movie/${movie_id}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return response;
};

export const ReviewsMovieApi = async movie_id => {
  const response = await axios.get(`movie/${movie_id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return response;
};
