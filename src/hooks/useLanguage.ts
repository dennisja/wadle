import { LANGUAGE } from '../utils/constants';
import { usePersistedState } from './usePersistedState';
import type { Language } from '../types';

const useLanguage = () => {
  const [language, setLanguage] = usePersistedState<Language>({
    key: LANGUAGE.APP_LANGUAGE_STORAGE_KEY,
    fallback: LANGUAGE.DEFAULT_LANGUAGE,
  });

  return { language, setLanguage };
};

export default useLanguage;
