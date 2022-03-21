import { VFC } from 'react';
import { Flex, Text } from 'theme-ui';
import { GameStatus } from '../../types';
import Button from '../../ui/Button';
import { getRandomItem } from '../../utils';
import { getAnswer } from '../../utils/word';
import ShareButton from './ShareButton';

const GAME_WON_MESSAGES: Record<number, string[]> = {
  1: ['Wa Wa Wa!!!', 'Kyatabu!!!', 'Gwe Asinga!!!'],
  2: ['Nkugideko enkofiira!!!', 'Kyakabi!!!', 'Kyeko baaba!!!'],
  3: ['Oli watabu!!!', 'Okikoze muganda wange!!!', 'Teri akwenkana!!!'],
  4: ['Kyekyo jjaja', 'Nenkya bwotyo!!!', 'Gwe asinga mukinto kino!!!'],
  5: ['Webale kuzanya!!!', 'Webale butapowa!!!', 'Webale kulemerako!!!'],
  6: ['Pheeew!!!', 'Kulika omuzannyo!!!', 'Kata kikuleme!!!'],
};

const GAME_LOST_MESSAGES = ['Biganye!!!', 'Webale kugezako!!!', 'Byayanga!!!'];

const UI_TEXT = {
  answerPrefix: 'Ekigambo ekitufu kibadde',
  gameLost: GAME_LOST_MESSAGES,
  gameWon: GAME_WON_MESSAGES,
  playAgain: 'Damu Ozanye',
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
          ? UI_TEXT.gameWon[steps]
          : UI_TEXT.gameLost
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
