import { useMemo, VFC } from 'react';
import { Box, Flex } from 'theme-ui';
import { GameStats } from '../../types';

type GuessDistributionEntry = { value: number; title: string };

export const getGuessDistribution = (
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
    // a game in progress has its stats as zero. We don't want that in here
    if (stat.guesses) {
      distribution[stat.guesses - 1].value += 1;
    }
  });

  return distribution;
};

export const getGuessBarWidth = (value: number, maxValue: number): number => {
  const offset = 0.05 * maxValue; // ensure that guesses with zero values at least have a width
  return Math.round(((value + offset) / (maxValue + offset)) * 100);
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
      {guessDistribution.map((guess) => (
        <Flex key={guess.title} sx={{ height: '20px', width: '100%', mb: 's' }}>
          <Flex>{guess.title}</Flex>
          <Flex sx={{ flex: 1 }}>
            <Flex
              sx={{
                width: `${getGuessBarWidth(guess.value, maxValue)}%`,
                bg: 'green',
                justifyContent: 'flex-end',
                alignItems: 'center',
                px: 's',
                mx: 'xs',
              }}
            >
              <Box>{guess.value}</Box>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default GuessDistribution;
