// ES6 module syntax
import LocalizedStrings from 'react-native-localization';
import en from './en';
import ar from './ar';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

const strings = new LocalizedStrings({
  ar: ar,
  en: en,
});

export default strings;
