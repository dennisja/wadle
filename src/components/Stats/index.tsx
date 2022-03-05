import { useMemo, VFC } from 'react';
import { Box, Flex, IconButton, Text } from 'theme-ui';
import useToggle from '../../hooks/useToggle';
import { GameStats, GameStatus, StreakStats } from '../../types';
import Icon from '../../ui/Icon';
import Modal from '../../ui/Modal';

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

export type StatsProps = {
  gameStats: readonly GameStats[];
  streakStats: StreakStats;
};

type StatsSummary = { value: number; title: string };

type SummaryProps = {
  summary: readonly StatsSummary[];
};

const Summary: VFC<SummaryProps> = ({ summary }) => (
  <Flex sx={{ justifyContent: 'space-between' }}>
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

const getSummary = ({
  gameStats,
  streakStats,
}: StatsProps): readonly StatsSummary[] => {
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

const Stats: VFC<StatsProps> = ({ gameStats, streakStats }) => {
  const [isOpen, toggleModal] = useToggle();
  const summary = useMemo(
    () => getSummary({ gameStats, streakStats }),
    [gameStats, streakStats]
  );

  return (
    <>
      <IconButton onClick={toggleModal}>
        <Icon iconName="stats" />
      </IconButton>
      <Modal isOpen={isOpen} onClose={toggleModal} title="Statistics">
        <Box sx={{ p: 'm' }}>
          <Summary summary={summary} />
        </Box>
      </Modal>
    </>
  );
};

export default Stats;
