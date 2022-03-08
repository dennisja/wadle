import { useCallback } from 'react';
import { GameMode, GameStats, GameStatus, StreakStats } from '../types';
import { usePersistedState } from './usePersistedState';

enum StatsLocalStorageKeys {
  GAME = 'stats:Game',
  STREAK = 'stats:Streak',
}

type UpdateStatsOnGameEndOptions = {
  status: GameStatus;
  guesses: number;
};

type UseStatsResult = {
  gameStats: readonly GameStats[];
  streakStats: StreakStats;
  updateStatsOnGameStart: (mode: GameMode) => void;
  updateStatsOnGameEnd: (options: UpdateStatsOnGameEndOptions) => void;
};

const useStats = (): UseStatsResult => {
  const [gameStats, setGameStats] = usePersistedState<readonly GameStats[]>({
    key: StatsLocalStorageKeys.GAME,
    fallback: [],
  });
  const [streakStats, setStreakStats] = usePersistedState<StreakStats>({
    key: StatsLocalStorageKeys.STREAK,
    fallback: { currentStreak: 0, maxStreak: 0 },
  });

  const updateStatsOnGameStart = useCallback((currentGameMode: GameMode) => {
    const game: GameStats = {
      status: GameStatus.PLAYING,
      guesses: 0,
      startedAt: Date.now(),
      finishedAt: 0,
      mode: currentGameMode,
    };
    setGameStats((prevStats) => [...prevStats, game]);
  }, []);

  const updateStatsOnGameEnd = useCallback(
    ({ status, guesses }: UpdateStatsOnGameEndOptions) => {
      // We assume that the last game is the game we need to update
      setGameStats((prevGames) => {
        const lastGameIndex = prevGames.length - 1;
        const currentGame = prevGames[lastGameIndex];
        if (currentGame) {
          const newGames = prevGames.slice(0, lastGameIndex);
          newGames.push({
            ...currentGame,
            finishedAt: Date.now(),
            status,
            guesses,
          });
          return newGames;
        }
        return prevGames;
      });

      setStreakStats((prevStreakStats) => {
        if (status === GameStatus.WON) {
          const currentStreak = prevStreakStats.currentStreak + 1;
          return {
            ...prevStreakStats,
            currentStreak,
            maxStreak: Math.max(currentStreak, prevStreakStats.maxStreak),
          };
        }

        if (status === GameStatus.LOST) {
          return { ...prevStreakStats, currentStreak: 0 };
        }

        return prevStreakStats;
      });
    },
    []
  );

  return {
    gameStats,
    streakStats,
    updateStatsOnGameEnd,
    updateStatsOnGameStart,
  };
};

export default useStats;
