import { LetterStatus } from '../../types';
import { LETTERS } from '../../utils/constants';

const defaultLettersStatus = LETTERS.reduce<Record<string, LetterStatus>>(
  (letters, currentLetter) => {
    letters[currentLetter] = LetterStatus.UN_GUESSED;
    return letters;
  },
  {}
);

const updateLetterStatus = (
  characters: string[],
  answer: string,
  status: Record<string, LetterStatus>
) => {
  for (let i = 0; i < characters.length; i += 1) {
    const character = characters[i];
    if (status[character] === LetterStatus.CORRECT) {
      continue;
    } else if (answer.charAt(i) === character) {
      status[character] = LetterStatus.CORRECT;
    } else if (answer.includes(character)) {
      status[character] = LetterStatus.PRESENT;
    } else {
      status[character] = LetterStatus.ABSENT;
    }
  }
  return status;
};

const getKeyboardLettersStatus = ({
  currentRow,
  board,
  answer,
}: {
  currentRow: number;
  board: string[][];
  answer: string;
}) => {
  const letterStatus = { ...defaultLettersStatus };
  for (let row = currentRow - 1; row >= 0; row -= 1) {
    updateLetterStatus(board[row], answer, letterStatus);
  }
  return letterStatus;
};

export { getKeyboardLettersStatus };
