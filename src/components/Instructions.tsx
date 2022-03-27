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
import { t } from '../utils/translations';
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

// put examples behind a functional call to make sure that t is re run with the correct language when language changes
const getExamples = (): readonly ExampleProps[] => [
  {
    title: t('instructions.examples.correct.title'),
    cellsStatus: [
      LetterStatus.CORRECT,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
    ],
    isValidRow: true,
    letters: EXAMPLE_ROW_LETTERS,
    description: t('instructions.examples.correct.description'),
  },
  {
    title: t('instructions.examples.present.title'),
    cellsStatus: [
      LetterStatus.UN_GUESSED,
      LetterStatus.PRESENT,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
    ],
    isValidRow: true,
    letters: EXAMPLE_ROW_LETTERS,
    description: t('instructions.examples.present.description'),
  },
  {
    title: t('instructions.examples.absent.title'),
    cellsStatus: [
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.ABSENT,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
    ],
    isValidRow: true,
    letters: EXAMPLE_ROW_LETTERS,
    description: t('instructions.examples.absent.description'),
  },
  {
    title: t('instructions.examples.wrongWord.title'),
    cellsStatus: [
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
      LetterStatus.UN_GUESSED,
    ],
    isValidRow: false,
    letters: EXAMPLE_ROW_LETTERS,
    description: t('instructions.examples.wrongWord.description'),
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

const Instructions: VFC = () => {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <>
      <IconButton onClick={toggleIsOpen}>
        <Icon iconName="info" />
      </IconButton>
      <Modal
        isOpen={isOpen}
        onClose={toggleIsOpen}
        title={t('instructions.title')}
      >
        <Flex sx={instructionContainerStyles}>
          {t('instructions.instructions').map((instruction) => (
            <Text key={instruction.slice(0, 10)} sx={{ mb: 'm' }}>
              {instruction}
            </Text>
          ))}
          <Divider color="colorTone.3" />
          <Text as="h3" variant="h4" sx={{ mb: 'm' }}>
            {t('instructions.examples.title')}
          </Text>
          {getExamples().map((example) => (
            <Example key={example.title} {...example} />
          ))}
        </Flex>
      </Modal>
    </>
  );
};

export default Instructions;
