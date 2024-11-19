import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define specific types for theme and language
type Theme = 'light' | 'dark' | null;
type Language = 'en' | 'ar';

// Define a proper type for user data
interface UserData {
  id?: string;
  email?: string;
  name?: string;
  // Add other user properties as needed
}

interface AuthState {
  theme: Theme;
  language: Language;
  userData: UserData | null;
  isLoading: boolean;
  error: string | null; // Make error type more specific
}

const initialState: AuthState = {
  theme: null,
  language: 'en',
  userData: null,
  isLoading: false,
  error: null,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    toggleLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    clearUserData: state => {
      state.userData = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  toggleTheme,
  toggleLanguage,
  setUserData,
  clearUserData,
  setError,
  clearError,
  setLoading,
} = userDataSlice.actions;

export default userDataSlice.reducer;
