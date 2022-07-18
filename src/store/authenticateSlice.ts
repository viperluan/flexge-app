import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { email: '', token: '' };

export const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      if (action.type === 'authenticate/login') {
        const { payload } = action;
        return payload;
      }

      return state;
    },
    logout: () => INITIAL_STATE,
  },
});

export const { login, logout } = authenticateSlice.actions;

export default authenticateSlice.reducer;
