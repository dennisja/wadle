import { VFC } from 'react';
import {
  Text,
  Flex,
  IconButton,
  Divider,
  Grid,
  ThemeUIStyleObject,
} from 'theme-ui';
import useToggle from '../hooks/useToggle';
import { LetterStatus } from '../types';
import Icon from '../ui/Icon';
import Modal from '../ui/Modal';
import { Row } from './GuessesBoard';

const exampleTilesStyles: ThemeUIStyleObject = {
  gridTemplateColumns: 'repeat(5, 1fr)',
  rowGap: 'm',
  width: '250px',
  maxWidth: '90vw',
  height: '40px',
};

const instructionContainerStyles: ThemeUIStyleObject = {
  padding: 'm',
  flexDirection: 'column',
  overflowY: 'auto',
};

const EXAMPLE_ROW_LETTERS = ['W', 'A', 'D', 'L', 'E'];

type ExampleProps = {
  title: string;
  cellsStatus: readonly LetterStatus[];
  isValidRow: boolean;
  letters: readonly string[];
  description: { prefix: string; highlight: string; postfix: string };
};

const EXAMPLES: readonly ExampleProps[] = [
  {
    title: 'Correct',
    cellsStatus: [
      LetterStatus.CORRECT,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
    ],
    isValidRow: true,
    letters: EXAMPLE_ROW_LETTERS,
    description: {
      prefix: 'The letter',
      highlight: 'W',
      postfix: 'is in the word and in the correct position',
    },
  },
  {
    title: 'Present',
    cellsStatus: [
      LetterStatus.UN_GUESSED,
      LetterStatus.PRESENT,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
    ],
    isValidRow: true,
    letters: EXAMPLE_ROW_LETTERS,
    description: {
      prefix: 'The letter',
      highlight: 'A',
      postfix: 'is in the word but in the wrong position',
    },
  },
  {
    title: 'Absent',
    cellsStatus: [
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.ABSENT,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
    ],
    isValidRow: true,
    letters: EXAMPLE_ROW_LETTERS,
    description: {
      prefix: 'The letter',
      highlight: 'D',
      postfix: 'is not in the word',
    },
  },
  {
    title: 'Wrong word',
    cellsStatus: [
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
    ],
    isValidRow: false,
    letters: EXAMPLE_ROW_LETTERS,
    description: {
      prefix: 'The word',
      highlight: 'WADLE',
      postfix: 'does not exist in our word list',
    },
  },
];

const Example: VFC<ExampleProps> = ({
  cellsStatus,
  isValidRow,
  letters,
  description,
  title,
}) => (
  <Flex sx={{ flexDirection: 'column', rowGap: 's', pb: 'l' }}>
    <Text as="h3" variant="h4">
      {title}
    </Text>
    <Grid sx={exampleTilesStyles}>
      <Row
        rowIndex={0}
        rowCellsStatus={cellsStatus}
        isInvalid={!isValidRow}
        letters={letters}
      />
    </Grid>
    <Text>
      {description.prefix}{' '}
      <Text as="span" variant="highlight">
        {description.highlight}{' '}
      </Text>
      {description.postfix}
    </Text>
  </Flex>
);

const INSTRUCTIONS: readonly string[] = [
  'Guess the word in six tries.',
  'Each guess is a 5 letter word. Press enter to submit.',
  'After every guess, the tiles color will change to show how close you are to the guess',
];

const Instructions: VFC = () => {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <>
      <IconButton onClick={toggleIsOpen}>
        <Icon iconName="info" />
      </IconButton>
      <Modal isOpen={isOpen} onClose={toggleIsOpen} title="Instructions">
        <Flex sx={instructionContainerStyles}>
          {INSTRUCTIONS.map((instruction) => (
            <Text key={instruction.slice(0, 10)} sx={{ mb: 'm' }}>
              {instruction}
            </Text>
          ))}
          <Divider color="colorTone.3" />
          <Text as="h3" variant="h4" sx={{ mb: 'm' }}>
            Examples
          </Text>
          {EXAMPLES.map((example) => (
            <Example key={example.title} {...example} />
          ))}
        </Flex>
      </Modal>
    </>
  );
};

export default Instructions;
