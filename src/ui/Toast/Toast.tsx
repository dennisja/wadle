import { useEffect, useMemo, useState, VFC } from 'react';
import { Box, Flex, IconButton, ThemeUICSSObject, Text } from 'theme-ui';
import { noop } from '../../utils';
import Icon from '../Icon';
import { TOAST_TRANSITION_DURATION } from './constants';
import {
  createToastRemoveHandler,
  onToastRemovalInitiation,
} from './toastsManager';
import { ToastData, ToastType } from './types';

enum ToastStatus {
  MOUNTING = 'mounting', // when the toast is initially mounted
  MOUNTED = 'mounted', // when the toast is visible to the user
  UNMOUNTING = 'unMounting', // when the toast is scheduled for removal (close button is clicked or its time is up)
}

const toastStyles: ThemeUICSSObject = {
  width: '100%',
  padding: 's',
  my: 's',
  borderRadius: 's',
  alignItems: 'center',
  transition: `transform ${TOAST_TRANSITION_DURATION}ms linear`,
  zIndex: 'toast',
  bg: 'colorTone.6',
};

const toastStatusStyles: Record<ToastStatus, ThemeUICSSObject> = {
  [ToastStatus.MOUNTING]: { transform: 'scale(0.8)' },
  [ToastStatus.MOUNTED]: { transform: 'scale(1)' },
  [ToastStatus.UNMOUNTING]: { transform: 'scale(0.5)' },
};

const toastTypeStyles: Record<ToastType, ThemeUICSSObject> = {
  error: {
    color: 'red',
    border: '1px solid red',
    borderLeft: '3px solid red',
  },
  info: {
    color: 'blue',
    border: '1px solid blue',
    borderLeft: '3px solid blue',
    borderColor: 'blue', // needed to pick this from theme
  },
  success: {
    color: 'green',
    border: '1px solid green',
    borderLeft: '3px solid green',
  },
  warning: {
    color: 'orange',
    border: '1px solid orange',
    borderLeft: '3px solid orange',
  },
};

const isUnMounting = (toastState: ToastStatus) =>
  toastState === ToastStatus.UNMOUNTING;

type ToastProps = ToastData;

const Toast: VFC<ToastProps> = ({
  id,
  messages,
  duration,
  type: toastType,
  title,
}) => {
  const [toastStatus, setToastStatus] = useState<ToastStatus>(
    ToastStatus.MOUNTING
  );

  const handleToastRemove = useMemo(() => {
    // we don't need to do anything if we are already unmounting the toast
    if (isUnMounting(toastStatus)) return noop;

    return createToastRemoveHandler(id);
  }, [id, toastStatus]);

  useEffect(() => {
    // When we mount initially we want to wait for the transition to finish
    // eslint-disable-next-line no-undef-init
    let timeoutId: NodeJS.Timeout | undefined = undefined;

    timeoutId = setTimeout(() => {
      setToastStatus(ToastStatus.MOUNTED);
    }, TOAST_TRANSITION_DURATION);

    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onToastRemovalInitiation((toastId) => {
      if (toastId === id) {
        setToastStatus(ToastStatus.UNMOUNTING);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef-init
    let timeoutId: NodeJS.Timeout | undefined = undefined;

    // we don't need to do anything if we are already unmounting the toast
    if (isUnMounting(toastStatus)) return undefined;

    timeoutId = setTimeout(() => {
      handleToastRemove();
    }, duration);

    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [duration, handleToastRemove, toastStatus]);

  const { color, ...otherTypeStyles } = toastTypeStyles[toastType];

  return (
    <Flex
      key={id}
      sx={{
        ...toastStyles,
        ...toastStatusStyles[toastStatus],
        ...otherTypeStyles,
      }}
    >
      <Box sx={{ flex: 1 }}>
        {title && (
          <Text as="h3" variant="h4">
            {title}
          </Text>
        )}
        {messages.map((message) => (
          <Text key={message} as="p" sx={{ my: 'xs' }}>
            {message}
          </Text>
        ))}
      </Box>
      <IconButton
        variant="icon"
        sx={{ color, '&:hover': { color: 'white', bg: color } }}
        onClick={handleToastRemove}
      >
        <Icon iconName="close" />
      </IconButton>
    </Flex>
  );
};

export default Toast;
