import { VFC } from 'react';
import { Box, Text, ThemeUIStyleObject } from 'theme-ui';
import { LetterStatus } from '../../types';
import { GetRowCellsStatus } from './types';

const LETTER_STATUS_STYLES: Record<LetterStatus, ThemeUIStyleObject> = {
  [LetterStatus.UN_GUESSED]: {
    border: '1px solid',
    borderColor: 'colorTone.2',
  },
  [LetterStatus.PRESENT]: {
    backgroundColor: 'yellow',
    color: 'colorTone.6',
  },
  [LetterStatus.ABSENT]: {
    backgroundColor: 'colorTone.1',
    color: 'colorTone.6',
  },
  [LetterStatus.CORRECT]: {
    backgroundColor: 'green',
    color: 'colorTone.6',
  },
};

type CellProps = { character: string; state: LetterStatus; isInvalid: boolean };

const Cell: VFC<CellProps> = ({ character, state, isInvalid }) => (
  <Text
    sx={{
      borderRadius: 's',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...(state && LETTER_STATUS_STYLES[state]),
      ...(isInvalid && { borderColor: 'red' }),
    }}
    variant="tiles"
  >
    {character}
  </Text>
);

type RowProps = {
  letters: readonly string[];
  isInvalid: boolean;
  rowIndex: number;
  rowCellsStatus: readonly LetterStatus[];
};

export const Row: VFC<RowProps> = ({
  letters,
  isInvalid,
  rowIndex,
  rowCellsStatus,
}) => (
  <>
    {letters.map((character, columnIndex) => (
      <Cell
        character={character}
        key={`${rowIndex}-${columnIndex}`}
        state={rowCellsStatus[columnIndex]}
        isInvalid={isInvalid}
      />
    ))}
  </>
);

const boardStyles: ThemeUIStyleObject = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridAutoRows: '1fr',
  gap: 's',
  width: '350px',
  height: '420px',
  '@media screen and (max-width: 349px)': {
    width: '90vw',
    height: 'calc(90vw * 6 / 5)',
    '& > span': {
      fontSize: '20px',
    },
  },
};

type GuessesBoardProps = {
  rows: readonly string[][];
  isRowInvalid: (rowIndex: number) => boolean;
  getRowCellsStatus: GetRowCellsStatus;
};

const GuessesBoard: VFC<GuessesBoardProps> = ({
  rows,
  isRowInvalid,
  getRowCellsStatus,
}) => (
  <Box sx={boardStyles}>
    {rows.map((row, rowIndex) => (
      <Row
        key={rowIndex}
        letters={row}
        isInvalid={isRowInvalid(rowIndex)}
        rowCellsStatus={getRowCellsStatus({ row, rowIndex })}
        rowIndex={rowIndex}
      />
    ))}
  </Box>
);

export default GuessesBoard;
