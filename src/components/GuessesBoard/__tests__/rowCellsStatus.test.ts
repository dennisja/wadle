import { getRowCellsStatus } from '../rowCellsStatus';

describe('first', () => {
  it.each<[string[], string, boolean, string[]]>([
    [
      ['c', 'o', 'n', 't', 'o'],
      'ortho',
      true,
      ['absent', 'present', 'absent', 'present', 'correct'],
    ],
    [
      ['a', 'b', 'a', 'c', 'a'],
      'vinca',
      true,
      ['absent', 'absent', 'absent', 'correct', 'correct'],
    ],
    [
      ['k', 'u', 'g', 'w', 'a'],
      'twala',
      true,
      ['absent', 'absent', 'absent', 'present', 'correct'],
    ],
    [
      ['k', 'u', 'g', 'w', 'a'],
      'twala',
      false,
      ['unGuessed', 'unGuessed', 'unGuessed', 'unGuessed', 'unGuessed'],
    ],
  ])(
    'getRowCellsStatus(%s, %s) returns the correct value',
    (row, answer, isSubmitted, rowStatus) => {
      expect(getRowCellsStatus({ row, answer, isSubmitted })).toEqual(
        rowStatus
      );
    }
  );
});
