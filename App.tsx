/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {PersistGate} from 'redux-persist/integration/react';
import {persist, store} from '@toolkit/store';
import AppNavigator from '@routes/index';
import {Provider} from 'react-redux';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
