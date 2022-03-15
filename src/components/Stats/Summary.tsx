import { useMemo, VFC } from 'react';
import { Box, Flex, Text } from 'theme-ui';
import { GameStats, GameStatus } from '../../types';
import { Statistics } from './types';

type StatsSummary = { value: number; title: string };

export const getTotalPlayedGames = (gameStats: readonly GameStats[]): number =>
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

const getTimeSummary = (
  gameStats: readonly GameStats[]
): readonly StatsSummary[] => {
  const gameTimes = gameStats.reduce<number[]>((allTimes, currentGame) => {
    if (currentGame.finishedAt > 0) {
      allTimes.push(currentGame.finishedAt - currentGame.startedAt);
    }
    return allTimes;
  }, []);
  const numberOfGames = gameTimes.length;
  const totalGameTime = gameTimes.reduce<number>(
    (totalTime, currentTime) => currentTime + totalTime,
    0
  );
  const maxTime = Math.max(...gameTimes);
  const minTime = Math.min(...gameTimes);
  const averageTime = totalGameTime / numberOfGames;

  return [
    { value: maxTime, title: 'Longest game' },
    { value: minTime, title: 'Shortest game' },
    { value: averageTime, title: 'Average time' },
    { value: totalGameTime, title: 'Play time' },
  ];
};

const formatTime = (totalMilliSeconds: number): string => {
  const milliSecondsInASecond = 1000;
  const milliSecondsInMinute = 60 * milliSecondsInASecond;
  const milliSecondsInHour = 60 * milliSecondsInMinute;

  const hours = Math.floor(totalMilliSeconds / milliSecondsInHour);
  let remainder = totalMilliSeconds % milliSecondsInHour;

  const minutes = Math.floor(remainder / milliSecondsInMinute);
  remainder %= milliSecondsInMinute;

  const seconds = Math.floor(remainder / milliSecondsInASecond);
  return `${hours}:${minutes}:${seconds}`;
};

type SummaryProps = {
  summary: readonly StatsSummary[];
  valueFormatter?: (value: number) => string;
  title: string;
};

const Summary: VFC<SummaryProps> = ({ summary, valueFormatter, title }) => (
  <Box sx={{ p: 'm' }}>
    <Text variant="h4" as="h3">
      {title}
    </Text>
    <Flex sx={{ justifyContent: 'space-between' }}>
      {summary.map((stat) => (
        <Box key={stat.title} sx={{ textAlign: 'center' }}>
          <Text as="p" variant="h4" sx={{ textAlign: 'center' }}>
            {valueFormatter ? valueFormatter(stat.value) : stat.value}
          </Text>
          <Text as="p" variant="caption" sx={{ wordBreak: 'break-word' }}>
            {stat.title}
          </Text>
        </Box>
      ))}
    </Flex>
  </Box>
);

type StreakSummaryProps = Statistics;

const StreakSummary: VFC<StreakSummaryProps> = ({ streakStats, gameStats }) => {
  const streakSummary = useMemo(
    () => getStreakSummary({ gameStats, streakStats }),
    [gameStats, streakStats]
  );
  return <Summary summary={streakSummary} title="Streak" />;
};

type TimeSummaryProps = { gameStats: readonly GameStats[] };

const TimeSummary: VFC<TimeSummaryProps> = ({ gameStats }) => {
  const timeSummary = useMemo(() => getTimeSummary(gameStats), [gameStats]);
  return (
    <Summary summary={timeSummary} valueFormatter={formatTime} title="Time" />
  );
};

export { StreakSummary, TimeSummary };
