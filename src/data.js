const baseURL = "https://api.themoviedb.org/3";
const API_KEY = "1912ac6f767998bd9f82c23be3dbc2df";

export const urls = {
  trendingMoviesDay: `${baseURL}/trending/movie/day?language=en-US&api_key=${API_KEY}`,
  trendingMoviesWeek: `${baseURL}/trending/movie/week?language=en-US&api_key=${API_KEY}`,
  popularMovies: `${baseURL}/movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
  popularTvshows: `${baseURL}/tv/popular?language=en-US&page=1&api_key=${API_KEY}`,
  topRatedMovies: `${baseURL}/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
  topRatedTvshows: `${baseURL}/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
  upcomingMovies: `${baseURL}/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`
};
