import axios from "axios";

class Api {
  api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  });

  // home : trending
  trending = {
    allOfDay: () => this.api.get(`/trending/all/day`),
    allOfWeek: () => this.api.get(`/trending/all/week`),
    movieOfDay: () => this.api.get(`/trending/movie/day`),
    movieOfWeek: () => this.api.get(`/trending/movie/week`),
    tvOfDay: () => this.api.get(`/trending/tv/day`),
    tvOfWeek: () => this.api.get(`/trending/tv/week`),
  };

  // movie
  movie = {
    detail: (id) =>
      this.api.get(`/movie/${id}`, {
        params: {
          append_to_response: "videos",
        },
      }),
    topRated: () => this.api.get("/movie/top_rated"),
    nowPlaying: () => this.api.get("/movie/now_playing"),
    upcoming: () =>
      this.api.get("/movie/upcoming", {
        params: {
          region: "kr",
        },
      }),
  };

  // tv
  tv = {
    detail: (id) =>
      this.api.get(`/tv/${id}`, {
        params: {
          append_to_response: "videos",
        },
      }),
    topRated: () => this.api.get("/tv/top_rated"),
    popular: () => this.api.get("/movie/popular"),
    airingToday: () => this.api.get("/tv/airing_today"),
  };

  // movie and tv search
  search = {
    movie: (query) =>
      this.api.get("/search/movie", {
        params: {
          query,
        },
      }),

    tv: (query) =>
      this.api.get("/search/tv", {
        params: {
          query,
        },
      }),
  };
}

export default Api;
