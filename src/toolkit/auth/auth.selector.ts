import {createDraftSafeSelector} from '@reduxjs/toolkit';
import {RootState} from '@toolkit/store';

const selectedReducer = (state: RootState) => state.userData;

export const selectUserData = createDraftSafeSelector(
  selectedReducer,
  userData => userData.userData,
);

export const selectTheme = createDraftSafeSelector(
  selectedReducer,
  userData => userData.theme,
);

export const selectLanguage = createDraftSafeSelector(
  selectedReducer,
  userData => userData.language,
);
