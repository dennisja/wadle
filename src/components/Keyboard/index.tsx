import { VFC } from 'react';
import { Box, Flex } from 'theme-ui';
import { LetterStatus } from '../../types';
import Button from '../../ui/Button';
import Icon from '../../ui/Icon';

const KEYBOARD_LETTERS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
] as const;

type KeyBoardProps = {
  onDeleteCharacter: () => void;
  onEnter: () => void;
  onAddCharacter: (char: string) => void;
  lettersStatus: Record<string, LetterStatus>;
};

const Keyboard: VFC<KeyBoardProps> = ({
  onAddCharacter,
  onDeleteCharacter,
  onEnter,
  lettersStatus,
}) => (
  <Box sx={{ width: '500px', maxWidth: '96vw' }}>
    {KEYBOARD_LETTERS.map((rowLetters, index) => (
      <Flex
        key={`keyboard-row-${index}`}
        sx={{ justifyContent: 'center', marginBottom: '10px' }}
      >
        {index === 2 && (
          <Button
            onClick={onEnter}
            sx={{ flex: 1.5 }}
            variant={LetterStatus.UN_GUESSED}
          >
            Enter
          </Button>
        )}
        {index === 1 && <Box sx={{ flex: 0.5 }} />}
        {rowLetters.map((letter) => (
          <Button
            key={letter}
            variant={lettersStatus[letter]}
            sx={{ ml: 'xs', flex: 1 }}
            onClick={() => onAddCharacter(letter)}
          >
            {letter}
          </Button>
        ))}
        {index === 1 && <Box sx={{ flex: 0.5 }} />}
        {index === 2 && (
          <Button
            onClick={onDeleteCharacter}
            variant={LetterStatus.UN_GUESSED}
            sx={{ ml: 'xs', flex: 1.5 }}
          >
            <Icon iconName="delete" />
          </Button>
        )}
      </Flex>
    ))}
  </Box>
);

export default Keyboard;
