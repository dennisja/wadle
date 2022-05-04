import { getPreviousRevelationErrors, getRowCellsStatus } from '../row';

describe('utils/game', () => {
  describe('getPreviousRevelationErrors', () => {
    type TestProps = {
      previousRow: string[];
      currentRow: string[];
      answer: string;
      expectedErrors: [];
    };

    it.each`
      expectedErrors                                                                                                              | currentRow           | previousRow          | answer
      ${['r should be used in the current word', 'The letter at position 5 should be o']}                                         | ${'conts'.split('')} | ${'torso'.split('')} | ${'ortho'}
      ${['r should be used in the current word']}                                                                                 | ${'conto'.split('')} | ${'torso'.split('')} | ${'ortho'}
      ${[]}                                                                                                                       | ${'torso'.split('')} | ${'conto'.split('')} | ${'ortho'}
      ${[]}                                                                                                                       | ${'wadle'.split('')} | ${[]}                | ${'reels'}
      ${[]}                                                                                                                       | ${'DIODE'.split('')} | ${'AUDIO'.split('')} | ${'VOIDS'}
      ${['The letter at position 2 should be O', 'The letter at position 3 should be I', 'The letter at position 4 should be D']} | ${'AUDIO'.split('')} | ${'LOIDL'.split('')} | ${'VOIDS'}
      ${[]}                                                                                                                       | ${'LOIDS'.split('')} | ${'DIODE'.split('')} | ${'VOIDS'}
      ${['The letter at position 2 should be A', 'The letter at position 3 should be D', 'The letter at position 4 should be I']} | ${'GLYPH'.split('')} | ${'RADII'.split('')} | ${'WADIS'}
      ${[]}                                                                                                                       | ${'DINER'.split('')} | ${'DIVER'.split('')} | ${'DIRER'}
      ${['The letter at position 4 should be E', 'L should be used in the current word']}                                         | ${'AUDIO'.split('')} | ${'LOVES'.split('')} | ${'GLEEK'}
      ${['e should be used in the current word']}                                                                                 | ${'amend'.split('')} | ${'creed'.split('')} | ${'emend'}
    `(
      'should return $expectedErrors when the current row is $currentRow and the previous row was $previousRow given the answer is $answer ',
      ({ expectedErrors, currentRow, previousRow, answer }: TestProps) => {
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
    it.each`
      row                          | answer     | isSubmitted | status
      ${['c', 'o', 'n', 't', 'o']} | ${'ortho'} | ${true}     | ${['absent', 'present', 'absent', 'present', 'correct']}
      ${['a', 'b', 'a', 'c', 'a']} | ${'vinca'} | ${true}     | ${['absent', 'absent', 'absent', 'correct', 'correct']}
      ${['k', 'u', 'g', 'w', 'a']} | ${'twala'} | ${true}     | ${['absent', 'absent', 'absent', 'present', 'correct']}
      ${['k', 'u', 'g', 'w', 'a']} | ${'twala'} | ${false}    | ${['unGuessed', 'unGuessed', 'unGuessed', 'unGuessed', 'unGuessed']}
    `(
      'getRowCellsStatus(%s, %s) returns the correct value',
      ({ row, answer, isSubmitted, status }) => {
        expect(getRowCellsStatus({ row, answer, isSubmitted })).toEqual(status);
      }
    );
  });
});
