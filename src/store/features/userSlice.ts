import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface User {
  avatar: string;
  bookmarks: string[];
  email: string;
  id: string;
  password: string;
  verified: boolean;
}

const initialState: User = {
  avatar: '',
  bookmarks: [],
  email: '',
  id: '',
  password: '',
  verified: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      updateUser: (state, action: PayloadAction<User>) => {
        state.avatar = action.payload.avatar;
        state.bookmarks = action.payload.bookmarks;
        state.email = action.payload.email;
        state.id = action.payload.id;
        state.password = action.payload.password;
        state.verified = action.payload.verified;
      },
    },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;

// Selector function
export const selectUser = (state: RootState) => state.user;
