import { LetterStatus } from '../../types';

export type GetRowCellsStatus = (options: {
  row: readonly string[];
  rowIndex: number;
}) => readonly LetterStatus[];
