import { VFC } from 'react';
import { Divider, IconButton } from 'theme-ui';
import useToggle from '../../hooks/useToggle';
import Icon from '../../ui/Icon';
import Modal from '../../ui/Modal';
import GuessDistribution from './GuessDistribution';
import { StreakSummary } from './Summary';
import { Statistics } from './types';

export type StatsProps = Statistics;

const Stats: VFC<StatsProps> = ({ gameStats, streakStats }) => {
  const [isOpen, toggleModal] = useToggle();

  return (
    <>
      <IconButton onClick={toggleModal}>
        <Icon iconName="stats" />
      </IconButton>
      <Modal isOpen={isOpen} onClose={toggleModal} title="Statistics">
        <StreakSummary gameStats={gameStats} streakStats={streakStats} />
        {/* TODO(theme): get color from theme */}
        <Divider color="rgba(0,0,0,0.1)" />
        <GuessDistribution gameStats={gameStats} />
      </Modal>
    </>
  );
};

export default Stats;
