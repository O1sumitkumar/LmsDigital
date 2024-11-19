export const API_BASE_URL =
  process.env.REACT_APP_API_URL || 'http://your-api-base-url';

export const SUPPORTED_LANGUAGES = {
  EN: 'en',
  AR: 'ar',
} as const;

export type SupportedLanguages =
  (typeof SUPPORTED_LANGUAGES)[keyof typeof SUPPORTED_LANGUAGES];
