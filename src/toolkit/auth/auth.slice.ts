import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  theme: 'light' | 'dark' | null;
  language: 'en' | 'ar';
  userData: {} | null;
  isLoading: boolean;
  error: unknown;
}

const initialState: AuthState = {
  theme: null,
  language: 'en',
  userData: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'authData',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const {toggleTheme, toggleLanguage} = authSlice.actions;

export default authSlice.reducer;
