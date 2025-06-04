const baseURL = "https://api.themoviedb.org/3";
const API_KEY = "1912ac6f767998bd9f82c23be3dbc2df";

export const urls = {
    trendingMoviesDay: `${baseURL}/trending/movie / day ? language = en - US & api_key=${API_KEY}`,
    trendingMoviesWeek: `${baseURL} /trending/movie / day ? language = en - US & api_key=${API_KEY}`,
    popularMovies: `${baseURL} /movie/popular ? language = en - US & page=1 & api_key=${API_KEY}`,
    popularTvshows: `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${API_KEY}`,
    topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
    topRatedTvshows: `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
    upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`
};