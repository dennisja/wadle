import { Language } from '../types';

const KEYBOARD_LETTERS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

const LETTERS = KEYBOARD_LETTERS.flat();
LETTERS.sort();

const ROOT_ELEMENT = document.getElementById('root');

const LANGUAGE: {
  APP_LANGUAGE_STORAGE_KEY: string;
  DEFAULT_LANGUAGE: Language;
} = {
  APP_LANGUAGE_STORAGE_KEY: 'APP_LANGUAGE',
  DEFAULT_LANGUAGE: 'english',
};

export { KEYBOARD_LETTERS, LETTERS, ROOT_ELEMENT, LANGUAGE };
