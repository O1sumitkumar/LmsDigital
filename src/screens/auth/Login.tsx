import strings from '@language/index';
import {toggleLanguage, toggleTheme} from '@toolkit/auth/auth.slice';
import {RootState} from '@toolkit/rootReducer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
interface LoginProps extends ScreenProps {}

const Login: React.FC<LoginProps> = () => {
  const {language} = useSelector((state: RootState) => state?.userData);
  const dispatch = useDispatch();
  const {theme} = useSelector((state: RootState) => state?.userData);

  const handleToggleLan = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    strings.setLanguage(newLanguage);
    dispatch(toggleLanguage(newLanguage));
  };

  // toggle theme
  const handleToggleTheme = () => {
    dispatch(toggleTheme(theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <View style={styles.container}>
      <Text>{strings.how}</Text>
      <Button mode="contained" onPress={handleToggleLan}>
        toggle {language}
      </Button>
      <Button mode="contained" onPress={handleToggleTheme}>
        toggle {theme}
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
