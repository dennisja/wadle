import { VFC } from 'react';
import { Button, Flex, Text } from 'theme-ui';
import { ReactComponent as InfoIcon } from '../assets/icons/info.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';

const ActionBar: VFC = () => {
  /** TODO: comeback and fix the styles of the buttons and how the   */
  return (
    <Flex
      sx={{
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Button sx={{ color: 'black', backgroundColor: 'white' }}>
        <InfoIcon />
      </Button>
      <Text as='h1'>Wadle</Text>
      <Button sx={{ color: 'black', backgroundColor: 'white' }}>
        <SettingsIcon />
      </Button>
    </Flex>
  );
};

export default ActionBar;
