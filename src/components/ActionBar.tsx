import { VFC } from 'react';
import { Button, Flex, Text } from 'theme-ui';
import { InfoIcon, SettingsIcon } from '../ui/icons';

const ActionBar: VFC = () => {
  /** TODO: comeback and fix the styles of the buttons and how the   */
  return (
    <Flex
      sx={{
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
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
