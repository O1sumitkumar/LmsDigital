/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer, Theme} from '@react-navigation/native';
import AppNavigator from '@routes/index';
import {dark, light} from '@themes/index';
import {persist, store} from '@toolkit/store';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const paperTheme = isDarkMode ? dark : light;

  return (
    <Provider store={store}>
      <PaperProvider theme={paperTheme}>
        <PersistGate loading={null} persistor={persist}>
          <NavigationContainer direction="rtl">
            {/* <SafeAreaView style={backgroundStyle}> */}
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <AppNavigator />
            {/* </SafeAreaView> */}
          </NavigationContainer>
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
}

export default App;
