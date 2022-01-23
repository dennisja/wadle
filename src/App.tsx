import { Flex, ThemeProvider } from 'theme-ui';
import GlobalStyles from './components/GlobalStyles';
import theme from './ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          color: 'accurateGuess',
        }}
      >
        Waddle
      </Flex>
    </ThemeProvider>
  );
}

export default App;
