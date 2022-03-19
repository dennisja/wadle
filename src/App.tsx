import { ThemeProvider } from 'theme-ui';
import ActionBar from './components/ActionBar';
import GameContainer from './components/GameContainer';
import GameOver from './components/GameOver';
import GlobalStyles from './components/GlobalStyles';
import GuessesBoard from './components/GuessesBoard';
import Keyboard from './components/Keyboard';
import useGame from './hooks/useGame';
import { GameStatus } from './types';
import Button from './ui/Button';
import Modal from './ui/Modal';
import theme from './ui/theme';
import { ToastContainer } from './ui/Toast';

function App() {
  const game = useGame();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer />
      <GameContainer>
        <ActionBar
          gameMode={game.gameMode}
          onGameModeChange={game.toggleGameMode}
          gameStats={game.gameStats}
          streakStats={game.streakStats}
        />
        <GuessesBoard
          rows={game.board}
          isRowInvalid={game.isRowInvalid}
          getRowCellsStatus={game.getRowCellsStatus}
        />
        {GameStatus.IDLE === game.gameStatus ? (
          <Button size="large" sx={{ mb: 'xl' }} onClick={game.restartGame}>
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
            answerId={game.answerIndex}
            gameStatus={game.gameStatus}
            playAgain={game.restartGame}
            steps={game.currentStep}
            board={game.board}
          />
        </Modal>
      </GameContainer>
    </ThemeProvider>
  );
}

export default App;
