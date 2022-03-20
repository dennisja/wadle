import { LetterStatus } from '../types';

const UI_TEXT = {
  revelations: {
    correct: { prefix: 'The letter at position', postfix: 'should be' },
    present: { postfix: 'should be used in the current word' },
  },
};

const characterBag = (items: readonly string[] = []) => {
  const chars: Record<string, number> = {};

  const bag = {
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

  items.forEach((item) => {
    bag.add(item);
  });

  return bag;
};

const UN_SUBMITTED_ROW_STATUS = Array(5).fill(LetterStatus.UN_GUESSED);
const getRowCellsStatus = ({
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

const getPreviousRevelationErrors = ({
  currentRow,
  previousRow,
  answer,
}: {
  currentRow: readonly string[];
  previousRow: readonly string[];
  answer: string;
}): readonly string[] => {
  const answerCharBag = characterBag(answer.split(''));
  const currentRowCharBag = characterBag(currentRow);
  const errors: string[] = [];

  // get all errors related to correct characters in the previous row that are missing in the current row
  previousRow.forEach((prevRowChar, i) => {
    const currentRowChar = currentRow[i];
    const answerChar = answer.charAt(i);

    if (answerChar !== prevRowChar) return;

    if (currentRowChar !== answerChar) {
      errors.push(
        `${UI_TEXT.revelations.correct.prefix} ${i + 1} ${
          UI_TEXT.revelations.correct.postfix
        } ${answerChar}`
      );
    } else {
      currentRowCharBag.remove(answerChar);
    }
    // we don't want to re visit the character in this position when calculating the present revelation errors
    // we therefore remove it from the answer
    answerCharBag.remove(answerChar);
  });

  // Get all errors related to a present characters in the previous row that are missing in current row
  previousRow.forEach((prevRowChar) => {
    if (answerCharBag.has(prevRowChar)) {
      if (!currentRowCharBag.has(prevRowChar)) {
        errors.push(`${prevRowChar} ${UI_TEXT.revelations.present.postfix}`);
      }

      answerCharBag.remove(prevRowChar);
    }
  });
  return errors;
};

export { getPreviousRevelationErrors, getRowCellsStatus };
