import { Language } from '../../types';
import * as acholi from './acholi';
import * as ateso from './ateso';
import * as english from './english';
import * as luganda from './luganda';
import * as lugbara from './lugbara';
import * as runyankore from './runyankore';

interface Bag {
  has(word: string): boolean;
}

const WORDS: Record<Language, { good: string[]; bad: string[] }> = {
  acholi,
  ateso,
  english,
  luganda,
  lugbara,
  runyankore,
};

const createWordBag = (list: string[]): Bag => {
  const bag = list.reduce<Record<string, boolean>>((wordBag, currentWord) => {
    wordBag[currentWord] = true;
    return wordBag;
  }, {});

  return {
    has(word: string) {
      return word in bag;
    },
  };
};

const getGoodWordsBag = (language: Language) =>
  createWordBag(WORDS[language].good);

const getBadWordsBag = (language: Language) =>
  createWordBag(WORDS[language].bad);

const getAnswer = (index: number, language: Language) => {
  const words = WORDS[language].good;
  // prevent getting an undefined error when we switch between languages when the current index is more than the number of words  in the selected language
  const answerIndex = Math.min(index, words.length - 1);
  return words[answerIndex].toUpperCase();
};

const getAnswerIndex = (language: Language) =>
  Math.floor(Math.random() * WORDS[language].good.length);

export { getBadWordsBag, getGoodWordsBag, getAnswerIndex, getAnswer };
