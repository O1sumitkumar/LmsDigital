// all the auth routes go here

import logo from '@assets/svgs/logo';
import MenuModal from '@components/modal/MenuModal';
import useAppTheme from '@hooks/useAppTheme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, WelcomeScreen} from '@screens/auth';
import React, {useState} from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

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

const RenderLeftHeader = (color: string) => {
  return (
    <View>
      <SvgXml xml={logo(color, 28, 124)} />
    </View>
  );
};

function Auth(): React.JSX.Element {
  const {colors} = useAppTheme();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openMenu = () => setIsVisible(true);
  const closeMenu = () => setIsVisible(false);

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'ios_from_right',
        headerBlurEffect: 'light',
      }}>
      <Stack.Group
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          navigationBarTranslucent: true,
          headerRight: () => RenderRightHeader(openMenu, isVisible, closeMenu),
          headerLeft: () => RenderLeftHeader(colors.onSurface),
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Auth;
