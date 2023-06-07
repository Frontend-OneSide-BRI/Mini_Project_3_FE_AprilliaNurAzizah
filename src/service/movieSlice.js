import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "./movieApi";

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await movieApi.getPopularMovies();
    return response.results;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default movieSlice.reducer;
