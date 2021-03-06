import { GetRowCellsStatus } from '../components/GuessesBoard/types';
import { getKeyboardLettersStatus } from '../components/Keyboard/lettersStatus';
import { GameMode, GameStatus, Language } from '../types';
import { createToast } from '../ui/Toast';
import { isGameOver, isHardMode } from '../utils/game';
import { getPreviousRevelationErrors, getRowCellsStatus } from '../utils/row';
import { t } from '../utils/translations';
import {
  getAnswer,
  getAnswerIndex,
  getBadWordsBag,
  getGoodWordsBag,
} from '../utils/words';
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

const getRowStatus = (
  characters: string[],
  answer: string,
  language: Language
): RowStatus => {
  const word = characters.join('');
  if (word === answer) return RowStatus.HAS_ANSWER;
  const WORD_BAG = getGoodWordsBag(language);
  if (WORD_BAG.has(word.toLocaleLowerCase())) return RowStatus.HAS_VALID_WORD;
  return RowStatus.HAS_INVALID_WORD;
};

enum LocalStorageStateKeys {
  BOARD = 'board',
  CURRENT_ROW = 'currentRow',
  CURRENT_COLUMN = 'currentColumn',
  ANSWER = 'guessIndex',
  IS_VALID_ROW = 'isValidRow',
  GAME_STATE = 'gameStatus',
  GAME_MODE = 'gameMode',
}

const useGame = (language: Language) => {
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
  const [answerIndex, setAnswerIndex] = usePersistedState({
    key: LocalStorageStateKeys.ANSWER,
    fallback: () => getAnswerIndex(language),
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
      // initialize stats for someone's very first game
      if (!gameStats.length) {
        stats.updateStatsOnGameStart(gameMode);
      }
      return GameStatus.PLAYING;
    },
  });
  const answer = getAnswer(answerIndex, language);

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
    const currentRowIsIncomplete = board[currentRow].join('').trim().length < 5;
    if (isGameOver(gameStatus) || currentRowIsIncomplete) {
      return;
    }

    const BAD_WORDS_BAG = getBadWordsBag(language);
    if (BAD_WORDS_BAG.has(board[currentRow].join('').toLowerCase())) {
      createToast({ messages: [t('useGame.word.bad')], type: 'error' });
      setIsValidRow(false);
      return;
    }

    const rowState = getRowStatus(board[currentRow], answer, language);

    if (rowState === RowStatus.HAS_INVALID_WORD) {
      createToast({ messages: [t('useGame.word.absent')], type: 'error' });
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
        createToast({
          messages: revelationErrors,
          title: 'Errors',
          type: 'error',
          duration: 3000 * revelationErrors.length,
        });
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
    setAnswerIndex(getAnswerIndex(language));
    stats.updateStatsOnGameStart(gameMode);
  };

  const toIdleState = () => {
    setGameStatus(GameStatus.IDLE);
  };

  const toUnStartedState = () => {
    setGameStatus(GameStatus.UN_STARTED);
  };

  const rowCellsStatus: GetRowCellsStatus = ({ row, rowIndex }) =>
    getRowCellsStatus({ row, answer, isSubmitted: rowIndex < currentRow });

  const isRowInvalid = (rowIndex: number): boolean =>
    currentRow === rowIndex && !isValidRow;

  const toggleGameMode = () => {
    if (gameStatus === GameStatus.PLAYING) {
      createToast({
        messages: [t('useGame.gameModeChange.warning')],
        type: 'warning',
      });
      return;
    }
    setGameMode((prevMode) =>
      prevMode === GameMode.HARD ? GameMode.EASY : GameMode.HARD
    );
  };

  return {
    addLetterToBoard,
    advanceToNextRow,
    answerIndex,
    board,
    currentStep: currentRow,
    gameMode,
    gameStats,
    gameStatus,
    getRowCellsStatus: rowCellsStatus,
    isGameOver: isGameOver(gameStatus),
    isRowInvalid,
    keyboardLettersStatus: getKeyboardLettersStatus({
      currentRow,
      board,
      answer,
    }),
    restartGame,
    removeLetterFromBoard,
    streakStats,
    toggleGameMode,
    toIdleState,
    toUnStartedState,
  };
};

export default useGame;
