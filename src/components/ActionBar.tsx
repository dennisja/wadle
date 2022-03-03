import { VFC } from 'react';
import { Button, Flex, Text } from 'theme-ui';
import Icon from '../ui/Icon';
import Instructions from './Instructions';

const ActionBar: VFC = () => (
  /** TODO: comeback and fix the styles of the buttons and how the   */
  <Flex
    sx={{
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <Instructions />
    <Text as="h1" variant="h1">
      Wadle
    </Text>
    <Button sx={{ color: 'black', backgroundColor: 'white' }}>
      <Icon iconName="settings" />
    </Button>
  </Flex>
);
export default ActionBar;
