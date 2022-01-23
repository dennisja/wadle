import { LetterStatus } from '../../types';

const characterCount = (
  characters: string | readonly string[],
  character: string,
): number => {
  let result: number = 0;
  for (let i = 0; i < characters.length; i += 1) {
    const currentCharacter = characters[i];
    if (currentCharacter === character) {
      result += 1;
    }
  }
  return result;
};

export const getBoardCellStatus = (
  columnIndex: number,
  rowIndex: number,
  row: readonly string[],
  answer: string,
  currentRowIndex: number,
) => {
  // if row is not yet submitted
  if (rowIndex >= currentRowIndex) {
    return LetterStatus.UN_GUESSED;
  }

  const cellCharacter = row[columnIndex];

  if (cellCharacter === answer.charAt(columnIndex)) {
    return LetterStatus.ACCURATE_GUESS;
  }

  const cellCharactersInAnswer = characterCount(answer, cellCharacter);
  const cellCharactersAlreadyVisited = characterCount(
    row.slice(0, columnIndex + 1),
    cellCharacter,
  );
  if (
    answer.includes(cellCharacter) &&
    cellCharactersAlreadyVisited <= cellCharactersInAnswer
  ) {
    return LetterStatus.INACCURATE_GUESS;
  }

  return LetterStatus.ABSENT_GUESS;
};
