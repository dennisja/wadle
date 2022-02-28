import { FC } from 'react';
import ReactModal from 'react-modal';
import { Flex, Text } from 'theme-ui';
import { Noop } from '../../types';
import useWindowWidth from '../../hooks/useWindowSize';
import { CloseIcon } from '../icons';
import Button from '../Button';

const isNotTestEnv = process.env.NODE_ENV !== 'test';

if (isNotTestEnv) {
  ReactModal.setAppElement('#root');
}

const modalCustomStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', // TODO(theme): get this from theme
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: '2', // TODO(theme): get this from theme
  },
  // TODO(theme): change the content styles based on screen size
  content: {
    border: 'none',
    borderRadius: 0,
    backgroundColor: 'white',
    color: 'black',
    height: '100%',
    marginLeft: '60%',
    padding: 0,
    position: 'static',
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
  },
};

// TODO: check whether we can do this with theme ui + react modal instead
const useModalStyles = (): ReactModal.Styles => {
  const { windowWidth } = useWindowWidth();

  if (windowWidth > 1024) {
    return modalCustomStyles;
  }

  if (windowWidth > 676) {
    return {
      ...modalCustomStyles,
      content: {
        ...modalCustomStyles.content,
        marginLeft: '50%',
        width: '50%',
      },
    };
  }

  return {
    ...modalCustomStyles,
    content: {
      ...modalCustomStyles.content,
      height: '80vh',
      marginTop: '20vh',
      marginLeft: 0,
      width: '100%',
    },
  };
};

type ModalProps = { isOpen: boolean; onClose: Noop; title: string };

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalStyles = useModalStyles();
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      shouldCloseOnOverlayClick
      ariaHideApp={isNotTestEnv}
    >
      <Flex
        as="header"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          py: 's',
          px: 'm',
        }}
      >
        <Text as="h2">{title}</Text>
        <Button
          onClick={onClose}
          size="small"
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
          <CloseIcon />
        </Button>
      </Flex>
      {children}
    </ReactModal>
  );
};

export default Modal;
