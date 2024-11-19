import PrimaryBtn from '@components/button/PrimaryBtn';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native-paper';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectLanguage, selectTheme} from '@toolkit/auth/auth.selector';
import {RootState} from '@toolkit/rootReducer';
import {AppDispatch} from '@toolkit/store';
import {toggleLanguage, toggleTheme} from '@toolkit/auth/auth.slice';
import {RFValue} from 'react-native-responsive-fontsize';

interface LoginProps extends ScreenProps {}

const Login: React.FC<LoginProps> = () => {
  const language = useSelector<RootState, string>(selectLanguage);
  const theme = useSelector<RootState, string>(selectTheme);
  const dispatch = useDispatch<AppDispatch>();
  const {t, i18n} = useTranslation();

  // Change language
  const changeLanguage = () => {
    const lng = language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(lng);
    dispatch(toggleLanguage(lng));
  };

  // toggle theme
  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(toggleTheme(newTheme));
  };

  return (
    <View style={styles.container}>
      <Text>{t('welcome')}</Text>
      {/* For strings with parameters */}
      <Text>{t('greeting', {name: 'John'})}</Text>
      <PrimaryBtn onPress={changeLanguage}>{t('changeLanguage')}</PrimaryBtn>
      <PrimaryBtn onPress={changeTheme}>{t('changeTheme')}</PrimaryBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: RFValue(10),
  },
});

export default Login;
