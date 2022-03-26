import { VFC } from 'react';
import { Flex, Text } from 'theme-ui';
import { GameStatus } from '../../types';
import Button from '../../ui/Button';
import { getRandomItem } from '../../utils';
import { getAnswer } from '../../utils/word';
import ShareButton from './ShareButton';

const UI_TEXT = {
  answerPrefix: 'The answer was',
  messages: {
    gameLost: ['Almost got it!!!', 'Nice try!!!', 'Good luck next time!!!'],
    gameWon: {
      1: ['Sensational!!!', 'Outstanding!!!', 'Fantastic!!!'],
      2: ['Hats off!!!', 'Tremendous!!!', 'Way to go!!!'],
      3: ['What a game!!!', 'You did it!!!', 'You rock!!!'],
      4: ['Respect!!!', 'Kudos!!!', 'You rule!!!'],
      5: ['Good show!!!', 'Well deserved!!!', 'Nice one!!!'],
      6: ['Pheeew!!!', 'Pat on the back!!!', 'Good one mate!!!'],
    } as Record<number, string[]>,
  },
  playAgain: 'Play Again',
};

type GameOverProps = {
  answerId: number;
  gameStatus: GameStatus;
  playAgain: () => void;

  /** The number of times taken to complete the game */
  steps: number;
  board: readonly string[][];
};

const GameOver: VFC<GameOverProps> = ({
  gameStatus,
  playAgain,
  steps,
  answerId,
  board,
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
          ? UI_TEXT.messages.gameWon[steps]
          : UI_TEXT.messages.gameLost
      )}
    </Text>

    {gameStatus === GameStatus.LOST && (
      <Text>
        {UI_TEXT.answerPrefix}{' '}
        <Text as="span" variant="h4">
          {getAnswer(answerId)}
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
        {UI_TEXT.playAgain}
      </Button>
      {gameStatus === GameStatus.WON && (
        <ShareButton answerId={answerId} board={board} />
      )}
    </Flex>
  </Flex>
);

export default GameOver;
