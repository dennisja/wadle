import { ThemeProvider } from 'theme-ui';
import ActionBar from './components/ActionBar';
import GameContainer from './components/GameContainer';
import GlobalStyles from './components/GlobalStyles';
import GuessesBoard from './components/GuessesBoard';
import Keyboard from './components/Keyboard';
import useGame from './hooks/useGame';
import theme from './ui/theme';

function App() {
  const game = useGame();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GameContainer>
        <ActionBar />
        <GuessesBoard
          rows={game.board}
          isRowInvalid={game.isRowInvalid}
          getCellStatus={game.getCellStatus}
        />
        <Keyboard
          onAddCharacter={game.addLetterToBoard}
          onDeleteCharacter={game.removeLetterFromBoard}
          onEnter={game.advanceToNextRow}
          lettersStatus={game.keyboardLettersStatus}
        />
      </GameContainer>
    </ThemeProvider>
  );
}

export default App;
