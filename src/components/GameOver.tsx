import { VFC } from 'react';
import { Flex, Text } from 'theme-ui';
import { GameStatus } from '../hooks/useGame';
import Button from '../ui/Button';
import { getRandomItem } from '../utils';

const GAME_WON_MESSAGES: Record<number, string[]> = {
  1: ['Sensational!!!', 'Outstanding!!!', 'Fantastic!!!'],
  2: ['Hats off!!!', 'Tremendous!!!', 'Way to go!!!'],
  3: ['What a game!!!', 'You did it!!!', 'You rock!!!'],
  4: ['Respect!!!', 'Kudos!!!', 'You rule!!!'],
  5: ['Good show!!!', 'Well deserved!!!', 'Nice one!!!'],
  6: ['Pheeew!!!', 'Pat on the back!!!', 'Good one mate!!!'],
};

const GAME_LOST_MESSAGES = [
  'Almost got it!!!',
  'Nice try!!!',
  'Good luck next time!!!',
];

type GameOverProps = {
  answer: string;
  gameStatus: GameStatus;
  playAgain: () => void;

  /** The number of times taken to complete the game */
  steps: number;
};

const GameOver: VFC<GameOverProps> = ({
  gameStatus,
  playAgain,
  steps,
  answer,
}) => (
  <Flex
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    }}
  >
    <Text as="span" role="img" sx={{ fontSize: '10rem' }}>
      {gameStatus === GameStatus.WON ? '🎉' : '🚫'}
    </Text>

    <Text variant="tiles">
      {getRandomItem(
        gameStatus === GameStatus.WON
          ? GAME_WON_MESSAGES[steps]
          : GAME_LOST_MESSAGES
      )}
    </Text>

    {gameStatus === GameStatus.LOST && (
      <Text>
        The answer was{' '}
        <Text as="span" variant="h4">
          {answer}
        </Text>
      </Text>
    )}

    <Button
      variant="primary"
      sx={{ my: 'l' }}
      onClick={playAgain}
      size="medium"
    >
      Play Again
    </Button>
  </Flex>
);

export default GameOver;
