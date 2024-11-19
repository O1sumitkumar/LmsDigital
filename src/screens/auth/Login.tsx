import PrimaryBtn from '@components/button/PrimaryBtn';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';

interface LoginProps extends ScreenProps {}

const Login: React.FC<LoginProps> = () => {
  const {t, i18n} = useTranslation();

  // Change language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Text>{t('welcome')}</Text>
      {/* For strings with parameters */}
      <Text>{t('greeting', {name: 'John'})}</Text>
      <PrimaryBtn onPress={() => changeLanguage('ar')}>
        {t('changeLanguage')}
      </PrimaryBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
