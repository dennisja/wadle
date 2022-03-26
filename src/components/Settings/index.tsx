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
  Input,
} from 'theme-ui';
import useToggle from '../../hooks/useToggle';
import { GameMode, Language, Noop } from '../../types';
import Icon from '../../ui/Icon';
import Modal from '../../ui/Modal';
import { t } from '../../utils/translations';

type SettingsRowProps = { title: string; description?: string };

const SettingsRow: FC<SettingsRowProps> = ({
  title,
  description,
  children,
}) => (
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

const LANGUAGES: readonly Language[] = [
  'acholi',
  'ateso',
  'luganda',
  'lugbara',
  'runyankore',
];

export type SelectLanguageProps = {
  language: Language;
  onLanguageChange: (lang: Language) => void;
};

const SelectLanguage: VFC<SelectLanguageProps> = ({
  language,
  onLanguageChange,
}) => (
  <SettingsRow
    title={t('settings.language.title')}
    description={t('settings.language.note')}
  >
    <Box>
      <Input
        as="select"
        value={language}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        sx={{ pl: 'm', appearance: 'auto', borderRadius: 'xs' }}
      >
        {LANGUAGES.map((lang) => (
          <option value={lang} key={lang}>
            {lang}
          </option>
        ))}
      </Input>
    </Box>
  </SettingsRow>
);

const switchStyles: ThemeUIStyleObject = {
  'input:checked ~ &': {
    backgroundColor: 'green',
  },
};

const ColorModeSettingsRow = () => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = useCallback(() => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, [setColorMode]);

  return (
    <SettingsRow title={t('settings.darkMode.title')}>
      <Box>
        <Switch
          sx={switchStyles}
          checked={colorMode === 'dark'}
          onChange={toggleColorMode}
        />
      </Box>
    </SettingsRow>
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

type SettingsProps = {
  onGameModeChange: Noop;
  gameMode: GameMode;
} & SelectLanguageProps;

const Settings: VFC<SettingsProps> = ({
  onGameModeChange,
  gameMode,
  onLanguageChange,
  language,
}) => {
  const [isOpen, toggleModal] = useToggle();

  return (
    <>
      <IconButton onClick={toggleModal}>
        <Icon iconName="settings" />
      </IconButton>
      <Modal
        title={t('settings.modalTitle')}
        isOpen={isOpen}
        onClose={toggleModal}
      >
        <SettingsRow
          title={t('settings.hardMode.title')}
          description={t('settings.hardMode.description')}
        >
          <Box>
            <Switch
              sx={switchStyles}
              checked={gameMode === GameMode.HARD}
              onChange={onGameModeChange}
            />
          </Box>
        </SettingsRow>
        <ColorModeSettingsRow />
        <SelectLanguage
          onLanguageChange={onLanguageChange}
          language={language}
        />
        <SettingsRow title={t('settings.contact.title')}>
          <Link
            href="https://twitter.com/dennisjjagwe"
            target="_blank"
            color="text"
          >
            {t('settings.contact.link.name')}
          </Link>
        </SettingsRow>
        <SettingsRow title={t('settings.contribute.title')}>
          <Link
            as={Link}
            href="https://github.com/dennisja/wadle"
            target="_blank"
            sx={githubLinkStyles}
          >
            <Icon iconName="github" />
          </Link>
        </SettingsRow>
      </Modal>
    </>
  );
};

export default Settings;
export type { SettingsProps };
