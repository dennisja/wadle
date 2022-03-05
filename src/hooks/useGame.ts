import { GetRowCellsStatus } from '../components/GuessesBoard/types';
import { getKeyboardLettersStatus } from '../components/Keyboard/lettersStatus';
import { GameMode, GameStatus } from '../types';
import { isGameOver, isHardMode } from '../utils/game';
import { getPreviousRevelationErrors, getRowCellsStatus } from '../utils/row';
import { getRandomWord, WORD_BAG } from '../utils/word';
import { usePersistedState } from './usePersistedState';
import useStats from './useStats';

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
  GAME_STATE = 'gameStatus',
  GAME_MODE = 'gameMode',
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
  const [gameMode, setGameMode] = usePersistedState({
    key: LocalStorageStateKeys.GAME_MODE,
    fallback: GameMode.EASY,
  });
  const { gameStats, streakStats, ...stats } = useStats();
  const [gameStatus, setGameStatus] = usePersistedState({
    key: LocalStorageStateKeys.GAME_STATE,
    fallback: () => {
      // initialize stats for someone's first every game
      if (!gameStats.length) {
        stats.updateStatsOnGameStart(gameMode);
      }
      return GameStatus.PLAYING;
    },
  });

  const addLetterToBoard = (character: string) => {
    if (currentColumn < board[0].length && !isGameOver(gameStatus)) {
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
    if (currentColumn >= 0 && !isGameOver(gameStatus)) {
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

  const advanceToNextRow = () => {
    if (isGameOver(gameStatus)) {
      return;
    }

    const rowState = getRowStatus(board[currentRow], answer);

    if (rowState === RowStatus.HAS_INVALID_WORD) {
      setIsValidRow(false);
      return;
    }

    if (isHardMode(gameMode)) {
      const revelationErrors = getPreviousRevelationErrors({
        answer,
        currentRow: board[currentRow],
        previousRow: board[currentRow - 1] || [],
      });
      if (revelationErrors.length) {
        setIsValidRow(false);
        // TODO(toast): add toast here instead
        // eslint-disable-next-line no-alert
        window.alert(revelationErrors.join('\n'));
        return;
      }
    }

    if (rowState === RowStatus.HAS_ANSWER) {
      stats.updateStatsOnGameEnd({
        status: GameStatus.WON,
        guesses: currentRow + 1,
      });
      setGameStatus(GameStatus.WON);
    }

    if (currentRow === board.length - 1 && rowState !== RowStatus.HAS_ANSWER) {
      stats.updateStatsOnGameEnd({
        status: GameStatus.LOST,
        guesses: currentRow + 1,
      });
      setGameStatus(GameStatus.LOST);
    }

    setCurrentColumn(0);
    setCurrentRow((row) => Math.min(row + 1, board.length));
  };

  const restartGame = () => {
    setBoard(defaultBoard);
    setCurrentRow(0);
    setCurrentColumn(0);
    setGameStatus(GameStatus.PLAYING);
    setAnswer(getRandomWord());
    stats.updateStatsOnGameStart(gameMode);
  };

  const toIdleState = () => {
    setGameStatus(GameStatus.IDLE);
  };

  const rowCellsStatus: GetRowCellsStatus = ({ row, rowIndex }) =>
    getRowCellsStatus({ row, answer, isSubmitted: rowIndex < currentRow });

  const isRowInvalid = (rowIndex: number): boolean =>
    currentRow === rowIndex && !isValidRow;

  const toggleGameMode = () => {
    setGameMode((prevMode) =>
      prevMode === GameMode.HARD ? GameMode.EASY : GameMode.HARD
    );
  };

  return {
    board,
    addLetterToBoard,
    restartGame,
    removeLetterFromBoard,
    advanceToNextRow,
    keyboardLettersStatus: getKeyboardLettersStatus({
      currentRow,
      board,
      answer,
    }),
    isRowInvalid,
    gameStatus,
    isGameOver: isGameOver(gameStatus),
    currentStep: currentRow,
    answer,
    toIdleState,
    getRowCellsStatus: rowCellsStatus,
    toggleGameMode,
    gameMode,
    streakStats,
    gameStats,
  };
};

export default useGame;
