import { Theme, ThemeUIContextValue, useThemeUI } from 'theme-ui';
import buttons from './buttons';
import colors from './colors';
import text from './text';
import space from './space';
import radii from './radii';
import zIndices from './zIndices';
import mediaQueries from './mediaQueries';

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  colors,
  text,
  buttons,
  space,
  radii,
  zIndices,
  mediaQueries,
});

export type ExactThemeType = typeof theme;

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactThemeType;
}
type UseTheme = () => ExactContextValue;

export const useTheme = useThemeUI as unknown as UseTheme;

export default theme;
