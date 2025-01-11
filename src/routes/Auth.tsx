import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuModal from '@components/modal/MenuModal';
import arabicLogo from '@assets/svgs/arabicLogo';
import {I18nManager, View} from 'react-native';
import useAppTheme from '@hooks/useAppTheme';
import englishLogo from '@assets/svgs/logo';
import {SvgXml} from 'react-native-svg';
import React, {useState} from 'react';
import {
  AccountVerifiedScreen,
  CompleteProfileScreen,
  ResetSuccessfulScreen,
  ForgotPasswordScreen,
  ResetEmailSentScreen,
  SetNewPasswordScreen,
  VerifyAccountScreen,
  WelcomeScreen,
  SignUpScreen,
  LoginScreen,
} from '@screens/auth';

const AuthStack = createNativeStackNavigator();

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
  const currentLogo = isArabic ? arabicLogo(colors) : englishLogo(colors);
  return (
    <View>
      <SvgXml xml={currentLogo} />
    </View>
  );
};

function Auth(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isArabic = I18nManager.isRTL;
  const {colors} = useAppTheme();

  const openMenu = () => setIsVisible(true);
  const closeMenu = () => setIsVisible(false);

  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        animation: 'ios_from_right',
        headerBlurEffect: 'extraLight',
      }}>
      <AuthStack.Group
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          navigationBarTranslucent: true,
          headerLeft: () => RenderLeftHeader(isArabic, colors.text),
        }}>
        <AuthStack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerRight: () =>
              RenderRightHeader(openMenu, isVisible, closeMenu),
          }}
        />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        <AuthStack.Screen
          name="CompleteProfile"
          component={CompleteProfileScreen}
        />
        <AuthStack.Screen
          name="VerifyAccount"
          component={VerifyAccountScreen}
        />
        <AuthStack.Screen
          name="AccountVerified"
          component={AccountVerifiedScreen}
        />
        <AuthStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        <AuthStack.Screen
          name="ResetEmailSent"
          component={ResetEmailSentScreen}
        />
        <AuthStack.Screen
          name="SetNewPassword"
          component={SetNewPasswordScreen}
        />
        <AuthStack.Screen
          name="ResetSuccessful"
          component={ResetSuccessfulScreen}
        />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
}

export default Auth;
