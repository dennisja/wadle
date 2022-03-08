import { GameStats, StreakStats } from '../../types';

export type Statistics = {
  gameStats: readonly GameStats[];
  streakStats: StreakStats;
};
