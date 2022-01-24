import { useState } from 'react';
import { getBoardCellStatus } from '../components/GuessesBoard/cellStatus';
import { getKeyboardLettersStatus } from '../components/Keyboard/lettersStatus';
import { getRandomWord, WORD_BAG } from '../utils/word';

const defaultBoard = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

const defaultRow = 0;

const defaultColumn = 0;

enum RowStatus {
  HAS_VALID_WORD = 'hasValidWord',
  HAS_ANSWER = 'hasCorrectAnswer',
  HAS_INVALID_WORD = 'hasInvalidWord',
}

enum GameStatus {
  PLAYING = 'playing',
  WON = 'won',
  LOST = 'lost',
  UN_STARTED = 'unStarted',
}

const GAME_OVER_STATES = [GameStatus.LOST, GameStatus.LOST];

const isGameOver = (gameStatus: GameStatus): boolean =>
  GAME_OVER_STATES.some(status => status === gameStatus);

const getRowStatus = (characters: string[], answer: string): RowStatus => {
  const word = characters.join('');
  if (word === answer) return RowStatus.HAS_ANSWER;
  if (WORD_BAG.has(word.toLocaleLowerCase())) return RowStatus.HAS_VALID_WORD;
  return RowStatus.HAS_INVALID_WORD;
};

const useGame = () => {
  const [board, setBoard] = useState(defaultBoard);
  const [currentRow, setCurrentRow] = useState(defaultRow);
  const [currentColumn, setCurrentColumn] = useState(defaultColumn);
  const [answer, setAnswer] = useState(getRandomWord);
  const [isValidRow, setIsValidRow] = useState(true);
  const [gameState, setGameState] = useState(GameStatus.PLAYING);

  const addLetterToBoard = (character: string) => {
    if (currentColumn < board[0].length && !isGameOver(gameState)) {
      setBoard(prevBoard => {
        const newRow = prevBoard[currentRow].map((value, index) =>
          index === currentColumn ? character : value,
        );
        const newBoard = [...prevBoard];
        newBoard[currentRow] = newRow;
        return newBoard;
      });
      setCurrentColumn(prevColumn => prevColumn + 1);
      setIsValidRow(true);
    }
  };

  const removeLetterFromBoard = () => {
    if (currentColumn >= 0 && !isGameOver(gameState)) {
      setBoard(prevBoard => {
        const newRow = prevBoard[currentRow].map((value, index) =>
          index === currentColumn - 1 ? '' : value,
        );
        const newBoard = [...prevBoard];
        newBoard[currentRow] = newRow;
        return newBoard;
      });
      setCurrentColumn(Math.max(currentColumn - 1, 0));
      setIsValidRow(true);
    }
  };

  // rename this to advance to next answer
  const advanceToNextRow = () => {
    if (isGameOver(gameState)) {
      return;
    }

    const rowState = getRowStatus(board[currentRow], answer);

    if (rowState === RowStatus.HAS_INVALID_WORD) {
      setIsValidRow(false);
      return;
    }

    if (rowState === RowStatus.HAS_ANSWER) {
      setGameState(GameStatus.WON);
    }

    if (currentRow === board.length - 1 && rowState !== RowStatus.HAS_ANSWER) {
      setGameState(GameStatus.LOST);
    }

    setCurrentColumn(0);
    setCurrentRow(row => Math.min(row + 1, board.length - 1));
  };

  const resetGame = () => {
    setBoard(defaultBoard);
    setCurrentRow(0);
    setCurrentColumn(0);
    setGameState(GameStatus.UN_STARTED);
  };

  const cellStatus = ({
    columnIndex,
    rowIndex,
  }: {
    columnIndex: number;
    rowIndex: number;
  }) => {
    return getBoardCellStatus(
      columnIndex,
      rowIndex,
      board[rowIndex],
      answer,
      currentRow,
      isGameOver(gameState),
    );
  };

  const isRowInvalid = (rowIndex: number): boolean =>
    currentRow === rowIndex && !isValidRow;

  return {
    board,
    addLetterToBoard,
    resetGame,
    removeLetterFromBoard,
    advanceToNextRow,
    keyboardLettersStatus: getKeyboardLettersStatus({
      currentRow,
      board,
      answer,
    }),
    getCellStatus: cellStatus,
    isRowInvalid,
  };
};

export default useGame;
