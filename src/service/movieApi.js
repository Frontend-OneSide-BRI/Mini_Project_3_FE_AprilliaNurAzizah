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
    getTrending: builder.query({
      query: () => `/movie/popular?api_key=${APIKEY}`,
    }),
    getUpComing: builder.query({
      query: () => `/movie/Upcoming?api_key=${APIKEY}`,
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
} = movieApi;
