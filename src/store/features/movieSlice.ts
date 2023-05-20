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
 },
});

export const { updateMovies } = movieSlice.actions;

export default movieSlice.reducer;

// Selector function
export const selectMovies = (state: RootState) => state.movies.movies;