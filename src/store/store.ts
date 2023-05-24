import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './features/movieSlice';
import userReducer from './features/userSlice'; // import the userReducer

export const store = configureStore({
 reducer: {
 movies: movieReducer,
 user: userReducer,
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
