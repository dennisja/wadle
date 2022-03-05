import { VFC } from 'react';
import { Flex, Text, ThemeUIStyleObject } from 'theme-ui';
import Instructions from './Instructions';
import Settings, { SettingsProps } from './Settings';

const actionBarContainerStyles: ThemeUIStyleObject = {
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
};

type ActionBarProps = SettingsProps;

const ActionBar: VFC<ActionBarProps> = ({ gameMode, onGameModeChange }) => (
  <Flex sx={actionBarContainerStyles}>
    <Instructions />
    <Text as="h1" variant="h1">
      Wadle
    </Text>
    <Settings gameMode={gameMode} onGameModeChange={onGameModeChange} />
  </Flex>
);

export default ActionBar;
