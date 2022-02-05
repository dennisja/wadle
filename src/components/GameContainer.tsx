import { FC } from 'react';
import { Flex } from 'theme-ui';

const GameContainer: FC = ({ children }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
    }}
  >
    {children}
  </Flex>
);

export default GameContainer;
