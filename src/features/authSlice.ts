import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAnimationFrame } from 'framer-motion';

const initialState = {
  username: '', loggedIn: false, userId: null, userImg: null,
};

type UserSchema = typeof initialState;

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserSchema>) {
      state = action.payload;
    },
  },
});

export default authReducer.reducer;
