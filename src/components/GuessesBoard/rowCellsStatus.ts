import { LetterStatus } from '../../types';

const characterBag = () => {
  const chars: Record<string, number> = {};

  return {
    add(char: string) {
      if (!(char in chars)) chars[char] = 0;
      chars[char] += 1;
    },
    remove(char: string) {
      if (char in chars) chars[char] -= 1;
    },
    has(char: string): boolean {
      return char in chars && chars[char] > 0;
    },
  };
};

const UN_SUBMITTED_ROW_STATUS = Array(5).fill(LetterStatus.UN_GUESSED);
export const getRowCellsStatus = ({
  row,
  answer,
  isSubmitted,
}: {
  row: readonly string[];
  answer: string;
  isSubmitted: boolean;
}): readonly LetterStatus[] => {
  if (!isSubmitted) return UN_SUBMITTED_ROW_STATUS;

  const rowStatus = Array(row.length).fill(LetterStatus.ABSENT);
  const visitedIndices: Record<string, boolean> = {};
  const unVisitedChars = characterBag();

  row.forEach((rowChar, index) => {
    if (rowChar === answer.charAt(index)) {
      visitedIndices[index] = true;
      rowStatus[index] = LetterStatus.CORRECT;
    } else {
      unVisitedChars.add(answer.charAt(index));
    }
  });

  row.forEach((rowChar, index) => {
    if (
      !(index in visitedIndices) &&
      unVisitedChars.has(rowChar) &&
      answer.includes(rowChar)
    ) {
      rowStatus[index] = LetterStatus.PRESENT;
      unVisitedChars.remove(rowChar);
    }
  });

  return rowStatus;
};
