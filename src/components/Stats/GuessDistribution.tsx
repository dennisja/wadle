import { useMemo, VFC } from 'react';
import { Box, Flex, ThemeUIStyleObject, Text } from 'theme-ui';
import { GameStats, GameStatus } from '../../types';

type GuessDistributionEntry = { value: number; title: string };

const UI_TEXT = {
  title: 'Emirundi gyokozeseza okuteba',
};

const getGuessDistribution = (
  gameStats: readonly GameStats[]
): readonly GuessDistributionEntry[] => {
  const distribution: GuessDistributionEntry[] = [
    { value: 0, title: '1' },
    { value: 0, title: '2' },
    { value: 0, title: '3' },
    { value: 0, title: '4' },
    { value: 0, title: '5' },
    { value: 0, title: '6' },
  ];

  gameStats.forEach((stat) => {
    // a game in progress has its guesses as zero. We don't want that in here
    // we also want to include only won games in the guess distribution
    if (stat.guesses && stat.status === GameStatus.WON) {
      distribution[stat.guesses - 1].value += 1;
    }
  });

  return distribution;
};

const getGuessBarWidth = (value: number, maxValue: number): number => {
  const offset = 0.05 * maxValue; // ensure that guesses with zero values at least have a width
  return Math.round(((value + offset) / (maxValue + offset)) * 100);
};

const barStyles: ThemeUIStyleObject = {
  justifyContent: 'flex-end',
  alignItems: 'center',
  pr: 'xs',
  mx: 'xs',
  bg: 'colorTone.1',
  color: 'colorTone.6',
};

const barContainerStyles: ThemeUIStyleObject = {
  height: '20px',
  width: '100%',
  mb: 's',
};

type GuessDistributionProps = { gameStats: readonly GameStats[] };

const GuessDistribution: VFC<GuessDistributionProps> = ({ gameStats }) => {
  const guessDistribution = useMemo(
    () => getGuessDistribution(gameStats),
    [gameStats]
  );

  const maxValue = useMemo(
    () => Math.max(...guessDistribution.map((guess) => guess.value)),
    [guessDistribution]
  );

  return (
    <Box sx={{ p: 'm' }}>
      <Text variant="h4" as="h3" sx={{ mb: 'm' }}>
        {UI_TEXT.title}
      </Text>
      {guessDistribution.map((guess) => (
        <Flex key={guess.title} sx={barContainerStyles}>
          <Flex>{guess.title}</Flex>
          <Flex sx={{ flex: 1 }}>
            <Flex
              sx={{
                width: `${getGuessBarWidth(guess.value, maxValue)}%`,
                ...barStyles,
              }}
            >
              <Text color="text">{guess.value}</Text>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default GuessDistribution;
