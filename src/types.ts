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
  IDLE = 'idle',
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

export { LetterStatus, GameMode, GameStatus };
export type { GameStats, Noop, StreakStats };
