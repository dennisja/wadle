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
