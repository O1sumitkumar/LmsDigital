import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './auth/auth.slice';

const rootReducer = combineReducers({
  userData: authSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
