import { VFC } from 'react';
import { Flex, IconButton, Text, ThemeUIStyleObject } from 'theme-ui';
import { Noop } from '../../types';
import Icon from '../Icon';

const headerContainerStyles: ThemeUIStyleObject = {
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid',
  borderBottomColor: 'opacity10',
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
      variant="iconSecondary"
      onClick={onClose}
      sx={{ p: 's', borderRadius: '50%' }}
    >
      <Icon iconName="close" />
    </IconButton>
  </Flex>
);

export default ModalHeader;
