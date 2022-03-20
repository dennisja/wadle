import { LetterStatus } from '../../types';

type GetRowCellsStatus = (options: {
  row: readonly string[];
  rowIndex: number;
}) => readonly LetterStatus[];

export type { GetRowCellsStatus };
