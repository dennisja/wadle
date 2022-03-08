import { useMemo, VFC } from 'react';
import { Box, Flex, Text } from 'theme-ui';
import { GameStats, GameStatus } from '../../types';
import { Statistics } from './types';

type StatsSummary = { value: number; title: string };

const getTotalPlayedGames = (gameStats: readonly GameStats[]): number =>
  gameStats[gameStats.length - 1].status === GameStatus.PLAYING
    ? gameStats.length - 1
    : gameStats.length;

const winPercentage = (gameStats: readonly GameStats[]) => {
  const totalGames = getTotalPlayedGames(gameStats);
  const wonGames = gameStats.reduce<number>(
    (won, currentStat) =>
      currentStat.status === GameStatus.WON ? won + 1 : won,
    0
  );
  return Math.round((wonGames / totalGames) * 100);
};

const getStreakSummary = ({
  gameStats,
  streakStats,
}: Statistics): readonly StatsSummary[] => {
  const summary = [
    { value: streakStats.currentStreak, title: 'Current Streak' },
    { value: streakStats.maxStreak, title: 'Max Streak' },
    {
      value: getTotalPlayedGames(gameStats),
      title: 'Played',
    },
    { value: winPercentage(gameStats), title: 'Win %' },
  ];
  return summary;
};

type SummaryProps = {
  summary: readonly StatsSummary[];
};

const Summary: VFC<SummaryProps> = ({ summary }) => (
  <Flex sx={{ justifyContent: 'space-between', p: 'm' }}>
    {summary.map((stat) => (
      <Box key={stat.title}>
        <Text as="p" variant="h4" sx={{ textAlign: 'center' }}>
          {stat.value}
        </Text>
        <Text as="p" variant="caption" sx={{ wordBreak: 'break-word' }}>
          {stat.title}
        </Text>
      </Box>
    ))}
  </Flex>
);

type StreakSummaryProps = Statistics;

const StreakSummary: VFC<StreakSummaryProps> = ({ streakStats, gameStats }) => {
  const streakSummary = useMemo(
    () => getStreakSummary({ gameStats, streakStats }),
    [gameStats, streakStats]
  );
  return <Summary summary={streakSummary} />;
};

type TimeSummaryProps = { gameStats: readonly GameStats[] };

const TimeSummary: VFC<TimeSummaryProps> = ({ gameStats }) => {
  console.log(gameStats);
  return null;
};

export { StreakSummary, TimeSummary };
