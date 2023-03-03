/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';
import { UserAuthSchema } from '../types/types';

const initialState = {
  username: '', loggedIn: false, userId: null, userImg: null,
} as UserAuthSchema;

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserAuthSchema>) {
      state = action.payload;
    },
  },
});
export const { setUser } = authReducer.actions;

export const getUser = (state: RootState) => state.authReducer;

export default authReducer.reducer;
