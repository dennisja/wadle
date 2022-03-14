import { FC } from 'react';
import { Flex, FlexProps } from 'theme-ui';

const GameContainer: FC<FlexProps> = ({ children, ...props }) => (
  <Flex
    {...props}
    sx={{
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      bg: 'colorTone.6',
    }}
  >
    {children}
  </Flex>
);

export default GameContainer;
