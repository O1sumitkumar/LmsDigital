import * as authActions from '@toolkit/auth/auth.action';
import type {AppDispatch} from '@toolkit/store';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';

// Custom hook to bind action creators to the dispatch function
export const useActions = () => {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch<AppDispatch>();

  // Bind the setAuthData action creator to the dispatch function
  // This allows you to directly call setAuthData without manually dispatching it in each component
  return bindActionCreators(
    {
      ...authActions,
    },
    dispatch,
  );
};
