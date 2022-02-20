import { ThemeUIStyleObject } from 'theme-ui';

const fontFamily = "'Clear Sans', 'Helvetica Neue', Arial, sans-serif";

type TextVariant = 'default' | 'h1' | 'tiles' | 'highlight';

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
    textAlign: 'center',
    textTransform: 'uppercase',
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
};

export default text;
