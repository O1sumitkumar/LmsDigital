import {initReactI18next} from 'react-i18next';
import {store} from '@toolkit/store';
import ar from '@language/ar';
import en from '@language/en';
import i18n from 'i18next';

const language: string = store?.getState()?.userData?.language;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  lng: language || 'ar', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
