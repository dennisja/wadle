import { ClassNames, ClassNamesContent } from '@emotion/react';
import { FC } from 'react';
import ReactModal from 'react-modal';
import { Noop } from '../../types';
import ModalHeader from './ModalHeader';

const isNotTestEnv = process.env.NODE_ENV !== 'test';

if (isNotTestEnv) {
  ReactModal.setAppElement('#root');
}

const TRANSITION_DURATION = 240;

const getOverlayStyles = ({
  cx,
  css,
  theme,
}: ClassNamesContent): ReactModal.Classes => ({
  base: cx(css`
    background-color: ${theme.colors.opacity50};
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: ${theme.zIndices.modalOverlay};
  `),
  afterOpen: cx(css``),
  beforeClose: cx(css``),
});

const getModalContentStyles = ({
  cx,
  css,
  theme,
}: ClassNamesContent): ReactModal.Classes => ({
  base: cx(css`
    border: none;
    border-radius: 0;
    background-color: ${theme.colors.colorTone[5]};
    color: ${theme.colors.text};
    height: 100%;
    margin-left: auto;
    padding: 0;
    position: static;
    width: 40%;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: opacity ${TRANSITION_DURATION}ms ease-in-out;

    ${theme.mediaQueries.smToM} {
      width: 50%;
    }

    ${theme.mediaQueries.sm} {
      height: 80vh;
      margin-top: 20vh;
      margin-left: 0;
      width: 100%;
      transform: translateY(100%);
      transition: transform ${TRANSITION_DURATION}ms ease-in-out;
      padding-bottom: calc(env(safe-area-inset-bottom) + ${theme.space.xxl}px);
    }
  `),
  afterOpen: cx(css`
    opacity: 1;

    ${theme.mediaQueries.sm} {
      transform: translateY(0);
    }
  `),
  beforeClose: cx(css`
    opacity: 0;

    ${theme.mediaQueries.sm} {
      transform: translateY(100%);
    }
  `),
});

type ModalProps = { isOpen: boolean; onClose: Noop; title: string };

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, title }) => (
  <ClassNames>
    {({ css, cx, theme }) => {
      const overlayClassName = getOverlayStyles({ css, cx, theme });
      const className = getModalContentStyles({ css, cx, theme });
      return (
        <ReactModal
          shouldCloseOnEsc
          shouldCloseOnOverlayClick
          isOpen={isOpen}
          onRequestClose={onClose}
          ariaHideApp={isNotTestEnv}
          overlayClassName={overlayClassName}
          className={className}
          closeTimeoutMS={TRANSITION_DURATION}
        >
          <ModalHeader title={title} onClose={onClose} />
          {children}
        </ReactModal>
      );
    }}
  </ClassNames>
);

export default Modal;
