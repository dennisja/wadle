import { VFC } from 'react';
import { Flex, Text } from 'theme-ui';
import { GameStatus } from '../../types';
import Button from '../../ui/Button';
import { getRandomItem } from '../../utils';
import { t } from '../../utils/translations';
import { getAnswer } from '../../utils/words';
import ShareButton from './ShareButton';
import type { Language } from '../../types';

type GameOverProps = {
  answerId: number;
  gameStatus: GameStatus;
  playAgain: () => void;

  /** The number of times taken to complete the game */
  steps: number;
  board: readonly string[][];
  language: Language;
};

const GameOver: VFC<GameOverProps> = ({
  gameStatus,
  playAgain,
  steps,
  answerId,
  board,
  language,
}) => (
  <Flex
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    }}
  >
    <Text as="span" role="img" sx={{ fontSize: '12rem' }}>
      {gameStatus === GameStatus.WON ? '🎉' : '🚫'}
    </Text>

    <Text variant="tiles">
      {getRandomItem(
        gameStatus === GameStatus.WON
          ? t('gameOver.messages.gameWon')[steps]
          : t('gameOver.messages.gameLost')
      )}
    </Text>

    {gameStatus === GameStatus.LOST && (
      <Text>
        {t('gameOver.answerPrefix')}{' '}
        <Text as="span" variant="h4">
          {getAnswer(answerId, language)}
        </Text>
      </Text>
    )}

    <Flex sx={{ my: 'l' }}>
      <Button
        variant="primary"
        sx={{ height: '100%' }}
        onClick={playAgain}
        size="medium"
      >
        {t('gameOver.playAgain')}
      </Button>
      {gameStatus === GameStatus.WON && (
        <ShareButton answerId={answerId} board={board} language={language} />
      )}
    </Flex>
  </Flex>
);

export default GameOver;
