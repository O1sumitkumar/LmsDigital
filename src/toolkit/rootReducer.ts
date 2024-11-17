import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  userData: userDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
