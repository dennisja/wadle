import { ThemeProvider } from 'theme-ui';
import ActionBar from './components/ActionBar';
import GameContainer from './components/GameContainer';
import GameOver from './components/GameOver';
import GlobalStyles from './components/GlobalStyles';
import GuessesBoard from './components/GuessesBoard';
import Keyboard from './components/Keyboard';
import useGame, { GameStatus } from './hooks/useGame';
import Button from './ui/Button';
import Modal from './ui/Modal';
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
        {GameStatus.IDLE === game.gameStatus ? (
          <Button size="large" sx={{ mb: 'xl' }} onClick={game.resetGame}>
            Play Again
          </Button>
        ) : (
          <Keyboard
            onAddCharacter={game.addLetterToBoard}
            onDeleteCharacter={game.removeLetterFromBoard}
            onEnter={game.advanceToNextRow}
            lettersStatus={game.keyboardLettersStatus}
          />
        )}
        <Modal
          title="Game Over"
          isOpen={game.isGameOver}
          onClose={game.toIdleState}
        >
          <GameOver
            answer={game.answer}
            gameStatus={game.gameStatus}
            playAgain={game.resetGame}
            steps={game.currentStep}
          />
        </Modal>
      </GameContainer>
    </ThemeProvider>
  );
}

export default App;
