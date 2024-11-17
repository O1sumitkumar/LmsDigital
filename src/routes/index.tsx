// this is the entry point for the routes
import {configureFonts, PaperProvider} from 'react-native-paper';
import {MD3Type} from 'react-native-paper/lib/typescript/types';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StatusBar, useColorScheme} from 'react-native';
import {dark, light} from '@themes/index';
import {RootState} from '@toolkit/store';
import {useSelector} from 'react-redux';
import {fontConfig} from 'src/fonts';
import MainNavigator from './Main';
import React from 'react';

export default function AppNavigator(): React.JSX.Element {
  const {theme, language} = useSelector((state: RootState) => state?.userData);
  const isDarkMode = useColorScheme() === 'dark';

  const userMode =
    theme === 'dark' || (theme !== 'light' && isDarkMode) ? dark : light;
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  const userTheme = {
    ...userMode,
    fonts: configureFonts({
      config: fontConfig,
      isV3: true,
    }) as unknown as Record<string, MD3Type>,
  };

  return (
    <PaperProvider theme={userTheme as any}>
      <NavigationContainer direction={direction} theme={userTheme as any}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundColor}
        />
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
