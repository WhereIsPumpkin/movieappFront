import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Movie {
_id: string;
 title: string;
 thumbnail: {
 trending: {
 small: string;
 large: string;
 },
 regular: {
 small: string;
 medium: string;
 large: string;
 },
 };
 year: number;
 category: string;
 rating: string;
 isBookmarked: boolean;
 isTrending: boolean;
}

export interface MovieState {
 movies: Movie[];
}

const initialState: MovieState = {
 movies: [],
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      updateMovies: (state, action: PayloadAction<Movie[]>) => {
        state.movies = action.payload;
      },
      toggleBookmark: (state, action: PayloadAction<string>) => {
        const movieIndex = state.movies.findIndex(movie => movie._id === action.payload);
        if (movieIndex !== -1) {
          state.movies[movieIndex].isBookmarked = !state.movies[movieIndex].isBookmarked;
        }
      }
    },
  });
  
  export const { updateMovies, toggleBookmark } = movieSlice.actions;

export default movieSlice.reducer;

// Selector function
export const selectMovies = (state: RootState) => state.movies.movies;