enum LetterStatus {
  UN_GUESSED = 'unGuessed', // not yet guessed
  CORRECT = 'correct', // guessed and in the exact position as in answer
  PRESENT = 'present', // guessed and in answer but in wrong position
  ABSENT = 'absent', // guessed but not in answer
}

type Noop = () => void;

enum GameStatus {
  PLAYING = 'playing',
  WON = 'won',
  LOST = 'lost',
  IDLE = 'idle', // when game is finished but user has not chosen to play again
  UN_STARTED = 'unStarted', // when we switch the language and user hasn't chosen to begin a game
}

enum GameMode {
  HARD = 'hard',
  EASY = 'easy',
}

type GameStats = {
  status: GameStatus;
  guesses: number;
  startedAt: number; // time stamp at which game was started
  finishedAt: number;
  mode: GameMode;
};

type StreakStats = {
  currentStreak: number;
  maxStreak: number;
};

type Language =
  | 'english'
  | 'luganda'
  | 'ateso'
  | 'acholi'
  | 'lugbara'
  | 'runyankore';

export { LetterStatus, GameMode, GameStatus };
export type { GameStats, Noop, StreakStats, Language };
