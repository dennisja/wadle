import { VFC } from 'react';
import { Box, Button, Flex } from 'theme-ui';
import { LetterStatus } from '../../types';
import { DeleteIcon } from '../../ui/icons';
import { LETTER_STATUS_STYLES } from '../../utils/constants';

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
  <Box>
    {KEYBOARD_LETTERS.map((rowLetters, index) => (
      <Flex
        key={`keyboard-row-${index}`}
        sx={{ justifyContent: 'center', marginBottom: '10px' }}
      >
        {index === 2 && <Button onClick={onEnter}>Enter</Button>}
        {rowLetters.map((letter) => (
          <Button
            key={letter}
            sx={{
              ...LETTER_STATUS_STYLES[lettersStatus[letter]],
              marginLeft: '5px',
            }} // TODO: Fix the button styles
            onClick={() => onAddCharacter(letter)}
          >
            {letter}
          </Button>
        ))}
        {index === 2 && (
          <Button onClick={onDeleteCharacter} sx={{ marginLeft: '5px' }}>
            <DeleteIcon />
          </Button>
        )}
      </Flex>
    ))}
  </Box>
);

export default Keyboard;
