import {useColorScheme} from 'react-native';
import {dark, light} from '@themes/index';
import {RootState} from '@toolkit/store';
import {useSelector} from 'react-redux';

const useAppTheme = () => {
  const {theme} = useSelector((state: RootState) => state?.userData);
  const isDarkMode = useColorScheme() === 'dark';

  const userMode =
    theme === 'dark' || (theme !== 'light' && isDarkMode) ? dark : light;
  return userMode;
};

export default useAppTheme;
