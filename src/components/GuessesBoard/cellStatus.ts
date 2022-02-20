import { LetterStatus } from '../../types';

const characterCount = (
  characters: string | readonly string[],
  character: string
): number => {
  let result = 0;
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
  isGameOver: boolean
) => {
  // if row is not yet submitted or game is over
  if (rowIndex >= currentRowIndex && !isGameOver) {
    return LetterStatus.UN_GUESSED;
  }

  const cellCharacter = row[columnIndex];

  if (cellCharacter === answer.charAt(columnIndex)) {
    return LetterStatus.CORRECT;
  }

  const cellCharactersInAnswer = characterCount(answer, cellCharacter);
  const cellCharactersAlreadyVisited = characterCount(
    row.slice(0, columnIndex + 1),
    cellCharacter
  );
  const guessesAreLessThanTotalGuessesInAnswer =
    cellCharactersAlreadyVisited <= cellCharactersInAnswer;

  const cellCharacterIndexInPrediction = row
    .slice(columnIndex + 1)
    .indexOf(cellCharacter);
  const cellCharacterIndexInAnswer = answer
    .slice(columnIndex + 1)
    .indexOf(cellCharacter);
  const isAccuratelyGuessedAhead =
    cellCharacterIndexInAnswer === cellCharacterIndexInPrediction &&
    cellCharacterIndexInPrediction !== -1;
  if (
    answer.includes(cellCharacter) &&
    guessesAreLessThanTotalGuessesInAnswer &&
    !isAccuratelyGuessedAhead
  ) {
    return LetterStatus.PRESENT;
  }

  return LetterStatus.ABSENT;
};
