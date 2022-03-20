import { GameStats, StreakStats } from '../../types';

type Statistics = {
  gameStats: readonly GameStats[];
  streakStats: StreakStats;
};

export type { Statistics };
