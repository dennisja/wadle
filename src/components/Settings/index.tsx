import { FC, useCallback, VFC } from 'react';
import {
  Flex,
  Box,
  IconButton,
  Text,
  Switch,
  Divider,
  ThemeUIStyleObject,
  useColorMode,
  Link,
} from 'theme-ui';
import useToggle from '../../hooks/useToggle';
import { GameMode, Noop } from '../../types';
import Icon from '../../ui/Icon';
import Modal from '../../ui/Modal';

const switchStyles: ThemeUIStyleObject = {
  'input:checked ~ &': {
    backgroundColor: 'green',
  },
};

type SettingRowProps = { title: string; description?: string };

const SettingRow: FC<SettingRowProps> = ({ title, description, children }) => (
  <>
    <Box sx={{ p: 'm' }}>
      <Flex sx={{ justifyContent: 'space-between', mb: 's' }}>
        <Text as="div" variant="h5">
          {title}
        </Text>
        {children}
      </Flex>
      {description && (
        <Text as="p" variant="caption">
          {description}
        </Text>
      )}
    </Box>
    <Divider color="opacity10" />
  </>
);

const ColorModeSettingRow = () => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = useCallback(() => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, [setColorMode]);

  return (
    <SettingRow title="Dark mode">
      <Box>
        <Switch
          sx={switchStyles}
          checked={colorMode === 'dark'}
          onChange={toggleColorMode}
        />
      </Box>
    </SettingRow>
  );
};

const githubLinkStyles: ThemeUIStyleObject = {
  p: 's',
  bg: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  '&:hover': {
    bg: 'green',
  },
};

export type SettingsProps = {
  onGameModeChange: Noop;
  gameMode: GameMode;
};

const Settings: VFC<SettingsProps> = ({ onGameModeChange, gameMode }) => {
  const [isOpen, toggleModal] = useToggle();

  return (
    <>
      <IconButton onClick={toggleModal}>
        <Icon iconName="settings" />
      </IconButton>
      <Modal title="Settings" isOpen={isOpen} onClose={toggleModal}>
        <SettingRow
          title="Hard mode"
          description="All revelations in the previous guesses must be used"
        >
          <Box>
            <Switch
              sx={switchStyles}
              checked={gameMode === GameMode.HARD}
              onChange={onGameModeChange}
            />
          </Box>
        </SettingRow>
        <ColorModeSettingRow />
        <SettingRow title="Contact">
          <Link
            href="https://twitter.com/dennisjjagwe"
            target="_blank"
            color="text"
          >
            Twitter
          </Link>
        </SettingRow>
        <SettingRow title="Contribute">
          <Link
            as={Link}
            href="https://github.com/dennisja/wadle"
            target="_blank"
            sx={githubLinkStyles}
          >
            <Icon iconName="github" />
          </Link>
        </SettingRow>
      </Modal>
    </>
  );
};

export default Settings;
