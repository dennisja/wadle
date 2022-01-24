import { LetterStatus } from '../../types';

const colors = {
  [LetterStatus.ACCURATE_GUESS]: '#1B5E20',
  [LetterStatus.INACCURATE_GUESS]: '#DD2C00',
  [LetterStatus.UN_GUESSED]: '#fffff',
  [LetterStatus.ABSENT_GUESS]: '#BDBDBD',
};

export default colors;
