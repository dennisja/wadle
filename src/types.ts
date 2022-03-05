export enum LetterStatus {
  UN_GUESSED = 'unGuessed', // not yet guessed
  CORRECT = 'correct', // guessed and in the exact position as in answer
  PRESENT = 'present', // guessed and in answer but in wrong position
  ABSENT = 'absent', // guessed but not in answer
}

export type Noop = () => void;

export enum GameStatus {
  PLAYING = 'playing',
  WON = 'won',
  LOST = 'lost',
  IDLE = 'idle',
}

export enum GameMode {
  HARD = 'hard',
  EASY = 'easy',
}

export type GameStats = {
  status: GameStatus;
  guesses: number;
  startedAt: number; // time stamp at which game was started
  finishedAt: number;
  mode: GameMode;
};

export type StreakStats = {
  currentStreak: number;
  maxStreak: number;
};
