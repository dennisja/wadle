import { Flex, ThemeProvider } from 'theme-ui';
import ActionBar from './components/ActionBar';
import GlobalStyles from './components/GlobalStyles';
import theme from './ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ActionBar />
    </ThemeProvider>
  );
}

export default App;
