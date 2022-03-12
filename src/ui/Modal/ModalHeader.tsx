import { VFC } from 'react';
import { Flex, IconButton, Text, ThemeUIStyleObject } from 'theme-ui';
import { Noop } from '../../types';
import Icon from '../Icon';

const headerContainerStyles: ThemeUIStyleObject = {
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  py: 's',
  px: 'm',
};

type ModalHeaderProps = {
  title: string;
  onClose: Noop;
};

const ModalHeader: VFC<ModalHeaderProps> = ({ title, onClose }) => (
  <Flex as="header" sx={headerContainerStyles}>
    <Text as="h2" variant="h4">
      {title}
    </Text>
    <IconButton
      onClick={onClose}
      sx={{
        // TODO(theme): Move all these to theme
        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 0, 0.6)',
        transition: '0.3s',
        borderRadius: '50%',
        p: 's',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.2)',
          cursor: 'pointer',
        },
      }}
    >
      <Icon iconName="close" />
    </IconButton>
  </Flex>
);

export default ModalHeader;
