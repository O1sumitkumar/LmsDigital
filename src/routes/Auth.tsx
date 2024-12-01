import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CompleteProfileScreen,
  LoginScreen,
  SignUpScreen,
  WelcomeScreen,
} from '@screens/auth';
import {selectLanguage} from '@toolkit/auth/auth.selector';
import MenuModal from '@components/modal/MenuModal';
import arabicLogo from '@assets/svgs/arabicLogo';
import useAppTheme from '@hooks/useAppTheme';
import englishLogo from '@assets/svgs/logo';
import {RootState} from '@toolkit/store';
import {useSelector} from 'react-redux';
import {SvgXml} from 'react-native-svg';
import React, {useState} from 'react';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const RenderRightHeader = (
  openMenu: () => void,
  isVisible: boolean,
  closeMenu: () => void,
) => {
  return (
    <MenuModal visible={isVisible} closeMenu={closeMenu} openMenu={openMenu} />
  );
};

const RenderLeftHeader = (isArabic: boolean, colors: string) => {
  console.log(colors);

  const currentLogo = isArabic ? arabicLogo(colors) : englishLogo(colors);
  return (
    <View>
      <SvgXml xml={currentLogo} />
    </View>
  );
};

function Auth(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const language = useSelector<RootState, string>(selectLanguage);
  const isArabic = language === 'ar';
  const {colors} = useAppTheme();

  const openMenu = () => setIsVisible(true);
  const closeMenu = () => setIsVisible(false);

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'ios_from_right',
        headerBlurEffect: 'light',
      }}
      initialRouteName="CompleteProfile">
      <Stack.Group
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          navigationBarTranslucent: true,
          headerLeft: () => RenderLeftHeader(isArabic, colors.text),
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerRight: () =>
              RenderRightHeader(openMenu, isVisible, closeMenu),
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="CompleteProfile"
          component={CompleteProfileScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Auth;
