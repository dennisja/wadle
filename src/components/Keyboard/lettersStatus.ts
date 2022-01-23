import { LetterStatus } from '../../types';

const LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const defaultLettersStatus = LETTERS.reduce<Record<string, LetterStatus>>(
  (letters, currentLetter) => {
    letters[currentLetter] = LetterStatus.UN_GUESSED;
    return letters;
  },
  {},
);

const updateLetterStatus = (
  characters: string[],
  answer: string,
  status: Record<string, LetterStatus>,
) => {
  for (let i = 0; i < characters.length; i += 1) {
    const character = characters[i];
    if (status[character] === LetterStatus.ACCURATE_GUESS) {
      continue;
    } else if (answer.charAt(i) === character) {
      status[character] = LetterStatus.ACCURATE_GUESS;
    } else if (answer.includes(character)) {
      status[character] = LetterStatus.INACCURATE_GUESS;
    } else {
      status[character] = LetterStatus.ABSENT_GUESS;
    }
  }
  return status;
};

export const getKeyboardLettersStatus = ({
  currentRow,
  board,
  answer,
}: {
  currentRow: number;
  board: string[][];
  answer: string;
}) => {
  let letterStatus = { ...defaultLettersStatus };
  for (let row = currentRow - 1; row >= 0; row -= 1) {
    updateLetterStatus(board[row], answer, letterStatus);
  }
  return letterStatus;
};
