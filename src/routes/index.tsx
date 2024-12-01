// this is the entry point for the routes
import {I18nManager, StatusBar, useColorScheme} from 'react-native';
import {configureFonts, PaperProvider} from 'react-native-paper';
import {MD3Type} from 'react-native-paper/lib/typescript/types';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {selectTheme} from '@toolkit/auth/auth.selector';
import {dark, light} from '@themes/index';
import MainNavigator from '@routes/Main';
import {useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {fontConfig} from 'src/fonts';
import i18n from '@language/i18n';

export default function AppNavigator(): React.JSX.Element {
  const theme = useSelector(selectTheme);

  const isDarkMode = useColorScheme() === 'dark';

  const userMode =
    theme === 'dark' || (theme !== 'light' && isDarkMode) ? dark : light;

  const backgroundColor =
    theme === 'dark' || (theme !== 'light' && isDarkMode)
      ? Colors.darker
      : Colors.lighter;

  const userTheme = {
    ...userMode,
    rtl: I18nManager.isRTL,
    fonts: configureFonts({
      config: fontConfig,
      isV3: true,
    }) as unknown as Record<string, MD3Type>,
  };

  const statusBarStyle =
    theme === 'dark' || (theme !== 'light' && isDarkMode)
      ? 'light-content'
      : 'dark-content';

  useEffect(() => {
    i18n.changeLanguage(I18nManager.isRTL ? 'ar' : 'en');
  }, []);

  return (
    <PaperProvider theme={userTheme as any}>
      <NavigationContainer theme={userTheme as any}>
        <StatusBar
          barStyle={statusBarStyle}
          backgroundColor={backgroundColor}
          translucent={true}
          animated
        />
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
