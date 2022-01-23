import { ThemeUICSSObject } from 'theme-ui';
import { LetterStatus } from '../types';

// TODO: make these variants and add them to the theme
export const LETTER_STATUS_STYLES: Record<LetterStatus, ThemeUICSSObject> = {
  [LetterStatus.UN_GUESSED]: {},
  [LetterStatus.INACCURATE_GUESS]: {
    backgroundColor: LetterStatus.INACCURATE_GUESS,
    color: 'white',
  },
  [LetterStatus.ABSENT_GUESS]: {
    background: LetterStatus.ABSENT_GUESS,
    color: 'white',
  },
  [LetterStatus.ACCURATE_GUESS]: {
    background: LetterStatus.ACCURATE_GUESS,
    color: 'white',
  },
};
