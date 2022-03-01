import '@emotion/react';
import { ExactThemeType } from './ui/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line
  export interface Theme extends ExactThemeType {}
}
