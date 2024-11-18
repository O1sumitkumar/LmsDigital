import {useColorScheme} from 'react-native';
import {dark, light} from '@themes/index';

const useAppTheme = () => {
  const mode = useColorScheme();
  return mode === 'dark' ? dark : light;
};

export default useAppTheme;
