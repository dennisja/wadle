import { VFC } from 'react';
import { Box, Flex, Text, ThemeUIStyleObject } from 'theme-ui';
import { createToast } from '../ui/Toast';
import { t } from '../utils/translations';
import Instructions from './Instructions';
import Settings, { SettingsProps } from './Settings';
import Stats, { StatsProps } from './Stats';

const actionBarContainerStyles: ThemeUIStyleObject = {
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  borderBottom: '1px solid',
  borderBottomColor: 'opacity10',
};

type ActionBarProps = SettingsProps & StatsProps;

const ActionBar: VFC<ActionBarProps> = ({
  gameMode,
  onGameModeChange,
  gameStats,
  streakStats,
}) => (
  <Flex sx={actionBarContainerStyles}>
    <Instructions />
    <Text
      as="h1"
      variant="h1"
      onClick={() => {
        createToast({
          messages: t('actionBar.pageTitle.click.toastMessage'),
          type: 'info',
          title: t('actionBar.pageTitle.click.toastTitle'),
        });
      }}
    >
      {t('actionBar.pageTitle.name')}
    </Text>
    <Box>
      <Stats gameStats={gameStats} streakStats={streakStats} />
      <Settings gameMode={gameMode} onGameModeChange={onGameModeChange} />
    </Box>
  </Flex>
);

export default ActionBar;
