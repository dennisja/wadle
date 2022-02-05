export enum LetterStatus {
  UN_GUESSED = 'unGuessed', // not yet guessed
  ACCURATE_GUESS = 'accurateGuess', // guessed and in the exact position as in answer
  INACCURATE_GUESS = 'inaccurateGuess', // guessed and in answer but in wrong position
  ABSENT_GUESS = 'absentGuess', // guessed but not in answer
}

export type Noop = () => void;
