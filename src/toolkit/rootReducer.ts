import {combineReducers, Reducer} from '@reduxjs/toolkit';
import userDataSlice from '@toolkit/auth/auth.slice';

const rootReducer: Reducer = combineReducers({
  userData: userDataSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
