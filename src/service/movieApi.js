import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIKEY, URLBASE } from "../Const/movieURL";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URLBASE}` }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `/discover/movie?api_key=${APIKEY}`,
    }),
    getPopularMovies: builder.query({
      query: () => `/movie/popular?api_key=${APIKEY}`,
    }),
    getDetailMovies: builder.query({
      query: () => `/movie/popular?api_key=${APIKEY}`,
    }),
    getTopRated: builder.query({
      query: () => `/movie/top_rated?api_key=${APIKEY}`,
    }),
    getTvShow: builder.query({
      query: () => `/discover/tv?api_key=${APIKEY}`,
    }),
    getMovie: builder.query({
      query: () => `/discover/movie?api_key=${APIKEY}`,
    }),
    getTvPopular: builder.query({
      query: () => `/tv/popular?api_key=${APIKEY}`,
    }),
    getMoviePopular: builder.query({
      query: () => `/movie/popular?api_key=${APIKEY}`,
    }),
    getMovieTopRated: builder.query({
      query: () => `/movie/top_rated?api_key=${APIKEY}`,
    }),
    getTvTopRated: builder.query({
      query: () => `/Tv/top_rated?api_key=${APIKEY}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetDetailMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetUpComingQuery,
  useGetTvShowQuery,
  useGetMovieQuery,
  useGetMoviePopularQuery,
  useGetMovieTopRatedQuery,
  useGetTvPopularQuery,
  useGetTvTopRatedQuery,
} = movieApi;
