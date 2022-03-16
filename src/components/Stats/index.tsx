import { VFC } from 'react';
import { Divider, Text, IconButton, ThemeUIStyleObject, Flex } from 'theme-ui';
import useToggle from '../../hooks/useToggle';
import Icon from '../../ui/Icon';
import Modal from '../../ui/Modal';
import GuessDistribution from './GuessDistribution';
import { getTotalPlayedGames, StreakSummary, TimeSummary } from './Summary';
import { Statistics } from './types';

const noGamesInfoStyles: ThemeUIStyleObject = {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'colorTone.1',
};

const statsContainerStyles: ThemeUIStyleObject = {
  height: '100%',
  overflowY: 'auto',
  flexDirection: 'column',
};

export type StatsProps = Statistics;

const Stats: VFC<StatsProps> = ({ gameStats, streakStats }) => {
  const [isOpen, toggleModal] = useToggle();
  const playedSomeGames = getTotalPlayedGames(gameStats) > 0;

  return (
    <>
      <IconButton onClick={toggleModal}>
        <Icon iconName="stats" />
      </IconButton>
      <Modal isOpen={isOpen} onClose={toggleModal} title="Statistics">
        {playedSomeGames ? (
          <Flex sx={statsContainerStyles}>
            <StreakSummary gameStats={gameStats} streakStats={streakStats} />
            <Divider color="colorTone.4" />
            <TimeSummary gameStats={gameStats} />
            <Divider color="colorTone.4" />
            <GuessDistribution gameStats={gameStats} />
          </Flex>
        ) : (
          <Text as="div" variant="h4" sx={noGamesInfoStyles}>
            Play Some Games
          </Text>
        )}
      </Modal>
    </>
  );
};

export default Stats;
