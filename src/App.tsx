import { useCallback } from 'react';
import { Flex, ThemeProvider } from 'theme-ui';
import ActionBar from './components/ActionBar';
import GameContainer from './components/GameContainer';
import GameOver from './components/GameOver';
import GlobalStyles from './components/GlobalStyles';
import GuessesBoard from './components/GuessesBoard';
import Keyboard from './components/Keyboard';
import useGame from './hooks/useGame';
import useLanguage from './hooks/useLanguage';
import Button from './ui/Button';
import Modal from './ui/Modal';
import theme from './ui/theme';
import { createToast, ToastContainer } from './ui/Toast';
import { t } from './utils/translations';
import { GameStatus } from './types';
import type { Language } from './types';

const showPlayAgainButton = (gameStatus: GameStatus) =>
  [GameStatus.IDLE, GameStatus.UN_STARTED].includes(gameStatus);

const isUnStarted = (gameStatus: GameStatus) =>
  gameStatus !== GameStatus.UN_STARTED;

function App() {
  const lang = useLanguage();
  const game = useGame(lang.language);

  const handleLanguageChange = useCallback(
    (language: Language) => {
      if (game.gameStatus === GameStatus.PLAYING) {
        createToast({
          messages: t('settings.language.change.gameInProgress.messages'),
          title: t('settings.language.change.gameInProgress.title'),
          type: 'warning',
          duration: 5000,
        });
        return;
      }
      game.toUnStartedState();
      lang.setLanguage(language);
    },
    [lang.setLanguage, game.gameStatus, game.toUnStartedState]
  );

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
          language={lang.language}
          onLanguageChange={handleLanguageChange}
        />
        {isUnStarted(game.gameStatus) && (
          <GuessesBoard
            rows={game.board}
            isRowInvalid={game.isRowInvalid}
            getRowCellsStatus={game.getRowCellsStatus}
          />
        )}
        {showPlayAgainButton(game.gameStatus) ? (
          <Flex
            sx={{
              ...(!isUnStarted(game.gameStatus) && {
                height: '100%',
              }),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button size="large" sx={{ mb: 'xl' }} onClick={game.restartGame}>
              {t('app.playAgain')}
            </Button>
          </Flex>
        ) : (
          <Keyboard
            onAddCharacter={game.addLetterToBoard}
            onDeleteCharacter={game.removeLetterFromBoard}
            onEnter={game.advanceToNextRow}
            lettersStatus={game.keyboardLettersStatus}
          />
        )}
        <Modal
          title={t('app.gameOver')}
          isOpen={game.isGameOver}
          onClose={game.toIdleState}
        >
          <GameOver
            answerId={game.answerIndex}
            gameStatus={game.gameStatus}
            playAgain={game.restartGame}
            steps={game.currentStep}
            board={game.board}
            language={lang.language}
          />
        </Modal>
      </GameContainer>
    </ThemeProvider>
  );
}

export default App;
