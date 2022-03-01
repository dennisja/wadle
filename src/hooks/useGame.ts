import { getRowCellsStatus } from '../components/GuessesBoard/rowCellsStatus';
import { GetRowCellsStatus } from '../components/GuessesBoard/types';
import { getKeyboardLettersStatus } from '../components/Keyboard/lettersStatus';
import { getRandomWord, WORD_BAG } from '../utils/word';
import { usePersistedState } from './usePersistedState';

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

export enum GameStatus {
  PLAYING = 'playing',
  WON = 'won',
  LOST = 'lost',
  IDLE = 'idle',
}

const GAME_OVER_STATES = [GameStatus.LOST, GameStatus.WON];

const isGameOver = (gameStatus: GameStatus): boolean =>
  GAME_OVER_STATES.some((status) => status === gameStatus);

const getRowStatus = (characters: string[], answer: string): RowStatus => {
  const word = characters.join('');
  if (word === answer) return RowStatus.HAS_ANSWER;
  if (WORD_BAG.has(word.toLocaleLowerCase())) return RowStatus.HAS_VALID_WORD;
  return RowStatus.HAS_INVALID_WORD;
};

enum LocalStorageStateKeys {
  BOARD = 'board',
  CURRENT_ROW = 'currentRow',
  CURRENT_COLUMN = 'currentColumn',
  ANSWER = 'guess',
  IS_VALID_ROW = 'isValidRow',
  GAME_STATE = 'gameState',
}

const useGame = () => {
  const [board, setBoard] = usePersistedState({
    key: LocalStorageStateKeys.BOARD,
    fallback: defaultBoard,
  });
  const [currentRow, setCurrentRow] = usePersistedState({
    key: LocalStorageStateKeys.CURRENT_ROW,
    fallback: defaultRow,
  });
  const [currentColumn, setCurrentColumn] = usePersistedState({
    key: LocalStorageStateKeys.CURRENT_COLUMN,
    fallback: defaultColumn,
  });
  const [answer, setAnswer] = usePersistedState({
    key: LocalStorageStateKeys.ANSWER,
    fallback: getRandomWord,
  });
  const [isValidRow, setIsValidRow] = usePersistedState({
    key: LocalStorageStateKeys.IS_VALID_ROW,
    fallback: true,
  });
  const [gameState, setGameState] = usePersistedState({
    key: LocalStorageStateKeys.GAME_STATE,
    fallback: GameStatus.PLAYING,
  });

  const addLetterToBoard = (character: string) => {
    if (currentColumn < board[0].length && !isGameOver(gameState)) {
      setBoard((prevBoard) => {
        const newRow = prevBoard[currentRow].map((value, index) =>
          index === currentColumn ? character : value
        );
        const newBoard = [...prevBoard];
        newBoard[currentRow] = newRow;
        return newBoard;
      });
      setCurrentColumn((prevColumn) => prevColumn + 1);
      setIsValidRow(true);
    }
  };

  const removeLetterFromBoard = () => {
    if (currentColumn >= 0 && !isGameOver(gameState)) {
      setBoard((prevBoard) => {
        const newRow = prevBoard[currentRow].map((value, index) =>
          index === currentColumn - 1 ? '' : value
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
    setCurrentRow((row) => Math.min(row + 1, board.length));
  };

  const resetGame = () => {
    setBoard(defaultBoard);
    setCurrentRow(0);
    setCurrentColumn(0);
    setGameState(GameStatus.PLAYING);
    setAnswer(getRandomWord());
  };

  const toIdleState = () => {
    setGameState(GameStatus.IDLE);
  };

  const rowCellsStatus: GetRowCellsStatus = ({ row, rowIndex }) =>
    getRowCellsStatus({ row, answer, isSubmitted: rowIndex < currentRow });

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
    isRowInvalid,
    gameStatus: gameState,
    isGameOver: isGameOver(gameState),
    currentStep: currentRow,
    answer,
    toIdleState,
    getRowCellsStatus: rowCellsStatus,
  };
};

export default useGame;
