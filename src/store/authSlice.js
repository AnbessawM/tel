import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      AsyncStorage.setItem('user', JSON.stringify(action.payload));
    },
    logoutSuccess: (state) => {
      state.user = null;
      AsyncStorage.removeItem('user');
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  // Mock login
  if (credentials.email && credentials.password) {
    dispatch(loginSuccess({
      id: 1,
      name: 'John Doe',
      email: credentials.email,
    }));
  }
};

export default authSlice.reducer;