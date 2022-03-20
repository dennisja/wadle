import { VFC } from 'react';
import { Flex, ThemeUIStyleObject } from 'theme-ui';
import Toast from './Toast';
import useToastManager from './toastsManager';

const toastsContainerStyles: ThemeUIStyleObject = {
  position: 'absolute',
  top: '50px',
  flexDirection: 'column',
  width: 'min(400px, 90vw)',
  transform: 'translate(calc(50vw - 50%))',
};

const ToastContainer: VFC = () => {
  const { toasts } = useToastManager();

  return (
    <Flex sx={toastsContainerStyles}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </Flex>
  );
};

export default ToastContainer;
