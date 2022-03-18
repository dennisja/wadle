import { FC } from 'react';
import { Flex, FlexProps, ThemeUIStyleObject } from 'theme-ui';

const gameContainerStyles: ThemeUIStyleObject = {
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  bg: 'colorTone.6',
};

const GameContainer: FC<FlexProps> = ({ children, ...props }) => (
  <Flex {...props} sx={gameContainerStyles}>
    {children}
  </Flex>
);

export default GameContainer;
