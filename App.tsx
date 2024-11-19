/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';
import {persist, store} from '@toolkit/store';
import AppNavigator from '@routes/index';
import {Provider} from 'react-redux';
import i18n from '@language/i18n';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <I18nextProvider i18n={i18n}>
          <AppNavigator />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
