import strings from '@language/index';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
interface LoginProps extends ScreenProps {}

const Login: React.FC<LoginProps> = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    strings.setLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <View style={styles.container}>
      <Text>{strings.how}</Text>
      <Button mode="contained" onPress={toggleLanguage}>
        toggle {language}
      </Button>
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
