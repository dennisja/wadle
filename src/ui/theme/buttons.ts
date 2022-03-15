import { ThemeUIStyleObject } from 'theme-ui';
import { ButtonSize } from './types';

const buttons = {
  present: {
    backgroundColor: 'yellow',
    color: 'colorTone.6',
  },
  absent: {
    backgroundColor: 'colorTone.1',
    color: 'colorTone.6',
  },
  unGuessed: {
    color: 'colorTone.0',
    backgroundColor: 'colorTone.3',
  },
  correct: {
    backgroundColor: 'green',
    color: 'colorTone.6',
  },
  primary: {
    color: 'colorTone.7',
    backgroundColor: 'green',
  },
  icon: {
    color: 'text',
    '&:hover': {
      color: 'green',
      backgroundColor: 'colorTone.7',
      cursor: 'pointer',
    },
  },
  iconSecondary: {
    backgroundColor: 'transparent',
    color: 'opacity50',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: 'opacity10',
      cursor: 'pointer',
    },
  },
};

export const buttonSizes: Record<ButtonSize, ThemeUIStyleObject> = {
  keyBoard: {
    height: '58px',
  },
  small: { px: 's', py: 'xs' },
  medium: { px: 'm', py: 's' },
  large: { px: 'l', py: 'm' },
};

export default buttons;
