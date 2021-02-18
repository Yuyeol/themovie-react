import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "38dacc6afb7c0de83b8f4761e2fdcca0",
    language: "en-US",
  },
});

export const moviesApi = {
  popular: () => api.get("movie/popular"),
  nowPlaying: () => api.get("movie/now_playing"),
  topRated: () => api.get("movie/top_rated"),
  upcoming: () => api.get("movie/upcoming"),
};

export const tvApi = {
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  topRated: () => api.get("tv/top_rated"),
  onTheAir: () => api.get("tv/on_the_air"),
};
