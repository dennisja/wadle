import { getPreviousRevelationErrors, getRowCellsStatus } from '../row';

describe('utils/game', () => {
  describe('getPreviousRevelationErrors', () => {
    it.each([
      [
        [
          'r should be used in the current word',
          'The letter at position 5 should be o',
        ],
        'conts'.split(''),
        'torso'.split(''),
        'ortho',
      ],
      [
        ['r should be used in the current word'],
        'conto'.split(''),
        'torso'.split(''),
        'ortho',
      ],
      [[], 'torso'.split(''), 'conto'.split(''), 'ortho'],
      [[], 'wadle'.split(''), [], 'reels'],
      [[], 'DIODE'.split(''), 'AUDIO'.split(''), 'VOIDS'],
      [
        [
          'The letter at position 2 should be O',
          'The letter at position 3 should be I',
          'The letter at position 4 should be D',
        ],
        'AUDIO'.split(''),
        'LOIDL'.split(''),
        'VOIDS',
      ],
      [[], 'LOIDS'.split(''), 'DIODE'.split(''), 'VOIDS'],
      [
        [
          'The letter at position 2 should be A',
          'The letter at position 3 should be D',
          'The letter at position 4 should be I',
        ],
        'GLYPH'.split(''),
        'RADII'.split(''),
        'WADIS',
      ],
    ])(
      'should return %p when the current row is %p and the previous row was %p given the answer is %p ',
      (expectedErrors, currentRow, previousRow, answer) => {
        const revelationErrors = getPreviousRevelationErrors({
          currentRow,
          previousRow,
          answer,
        });
        expect(expectedErrors).toHaveLength(revelationErrors.length);
        expectedErrors.forEach((error) => {
          expect(revelationErrors).toContain(error);
        });
      }
    );
  });

  describe('getRowCellsStatus', () => {
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
});
