import { VFC } from 'react';
import { Box } from 'theme-ui';
import { LetterStatus } from '../../types';
import { LETTER_STATUS_STYLES } from '../../utils/constants';

type GetCellStatus = (options: {
  columnIndex: number;
  rowIndex: number;
}) => LetterStatus;

type RowProps = {
  letters: readonly string[];
  isInvalid: boolean;
  rowIndex: number;
  getCellStatus: GetCellStatus;
};

type CellProps = { character: string; state: LetterStatus };

const Cell: VFC<CellProps> = ({ character, state }) => (
  <Box
    sx={{
      width: '4rem',
      height: '4rem',
      borderRadius: '5px',
      boxShadow:
        '5px 5px 5px rgba(0, 0, 0, .1), -5px -5px 5px rgba(255,255,255)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0.5rem',
      ...(state && LETTER_STATUS_STYLES[state]),
    }}
  >
    {character}
  </Box>
);

const Row: VFC<RowProps> = ({
  letters,
  isInvalid,
  rowIndex,
  getCellStatus,
}) => (
  <Box sx={{ display: 'flex', ...(isInvalid && { border: '1px solid red' }) }}>
    {letters.map((character, columnIndex) => (
      <Cell
        character={character}
        key={`${rowIndex}-${columnIndex}`}
        state={getCellStatus({ columnIndex, rowIndex })}
      />
    ))}
  </Box>
);

type GuessesBoardProps = {
  rows: readonly string[][];
  isRowInvalid: (rowIndex: number) => boolean;
  getCellStatus: GetCellStatus;
};

const GuessesBoard: VFC<GuessesBoardProps> = ({
  rows,
  isRowInvalid,
  getCellStatus,
}) => (
  <Box>
    {rows.map((letters, index) => (
      <Row
        key={index}
        letters={letters}
        isInvalid={isRowInvalid(index)}
        getCellStatus={getCellStatus}
        rowIndex={index}
      />
    ))}
  </Box>
);

export default GuessesBoard;
