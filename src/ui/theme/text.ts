import { ThemeUIStyleObject } from 'theme-ui';

const fontFamily = "'Clear Sans', 'Helvetica Neue', Arial, sans-serif";

type TextVariant =
  | 'default'
  | 'h1'
  | 'h4'
  | 'h5'
  | 'tiles'
  | 'highlight'
  | 'caption';

const text: Record<TextVariant, ThemeUIStyleObject> = {
  default: {
    fontFamily,
    fontWeight: 'inherit',
    fontSize: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: 'inherit',
    textTransform: 'inherit',
  },
  h1: {
    fontFamily,
    fontSize: '36px',
    fontWeight: 700,
    letterSpacing: '0.2rem',
    textTransform: 'uppercase',
  },

  h4: {
    fontFamily,
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: '0.1rem',
    textTransform: 'uppercase',
  },
  h5: {
    fontFamily,
    fontSize: '18px',
    fontWeight: 700,
    letterSpacing: '0.1rem',
    textTransform: 'capitalize',
  },
  tiles: {
    alignItems: 'center',
    fontFamily,
    fontSize: '30px',
    fontWeight: 'bold',
    lineHeight: '30px',
    textTransform: 'uppercase',
  },
  highlight: {
    fontFamily,
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '14px',
  },
  caption: {
    fontFamily,
    fontSize: '14px',
    lineHeight: '14px',
    color: 'gray',
  },
};

export default text;
