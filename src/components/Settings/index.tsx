import { VFC } from 'react';
import {
  Flex,
  Box,
  IconButton,
  Text,
  Switch,
  Divider,
  ThemeUIStyleObject,
} from 'theme-ui';
import { GameMode } from '../../hooks/useGame';
import useToggle from '../../hooks/useToggle';
import { Noop } from '../../types';
import Icon from '../../ui/Icon';
import Modal from '../../ui/Modal';

const switchStyles: ThemeUIStyleObject = {
  'input:checked ~ &': {
    backgroundColor: 'green',
  },
};

export type SettingsProps = {
  onGameModeChange: Noop;
  gameMode: GameMode;
};

const Settings: VFC<SettingsProps> = ({ onGameModeChange, gameMode }) => {
  const [isOpen, toggleModal] = useToggle();

  // TODO: make a UI component for settings later
  return (
    <>
      <IconButton onClick={toggleModal}>
        <Icon iconName="settings" />
      </IconButton>
      <Modal title="Settings" isOpen={isOpen} onClose={toggleModal}>
        <Box sx={{ p: 's', rowGap: 's' }}>
          <Flex sx={{ justifyContent: 'space-between', mb: 's' }}>
            <Text as="div" variant="h5">
              Hard mode
            </Text>
            <Box>
              <Switch
                sx={switchStyles}
                checked={gameMode === GameMode.HARD}
                onChange={onGameModeChange}
              />
            </Box>
          </Flex>
          <Text as="p" variant="caption">
            All revelations in the previous guesses must be used
          </Text>
        </Box>
        {/* TODO: move this to theme */}
        <Divider color="rgba(0,0,0,0.1)" />
      </Modal>
    </>
  );
};

export default Settings;
