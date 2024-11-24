/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import i18n from '@language/i18n';
import AppNavigator from '@routes/index';
import {persist, store} from '@toolkit/store';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  // if (__DEV__) {
  //   NativeModules.DevSettings.setIsDebuggingRemotely(true);
  // }
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
