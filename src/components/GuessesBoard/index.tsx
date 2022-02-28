import { VFC } from 'react';
import { Box, Text, ThemeUIStyleObject } from 'theme-ui';
import { LetterStatus } from '../../types';
import { GetRowCellsStatus } from './types';

const LETTER_STATUS_STYLES: Record<LetterStatus, ThemeUIStyleObject> = {
  [LetterStatus.UN_GUESSED]: {},
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
      borderRadius: '6px',
      boxShadow:
        '5px 5px 5px rgba(0, 0, 0, .1), -5px -5px 5px rgba(255,255,255)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...(state && LETTER_STATUS_STYLES[state]),
      ...(isInvalid && { border: '1px solid red' }),
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

const Row: VFC<RowProps> = ({
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
