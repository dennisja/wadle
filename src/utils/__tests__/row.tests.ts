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
      expectedErrors                                                                                                                                      | currentRow           | previousRow          | answer
      ${['r erina okukozesebwa mu lunyiriri luno', 'Ennyukuta eri mu kifo namba 5 erina kubera o']}                                                       | ${'conts'.split('')} | ${'torso'.split('')} | ${'ortho'}
      ${['r erina okukozesebwa mu lunyiriri luno']}                                                                                                       | ${'conto'.split('')} | ${'torso'.split('')} | ${'ortho'}
      ${[]}                                                                                                                                               | ${'torso'.split('')} | ${'conto'.split('')} | ${'ortho'}
      ${[]}                                                                                                                                               | ${'wadle'.split('')} | ${[]}                | ${'reels'}
      ${[]}                                                                                                                                               | ${'DIODE'.split('')} | ${'AUDIO'.split('')} | ${'VOIDS'}
      ${['Ennyukuta eri mu kifo namba 2 erina kubera O', 'Ennyukuta eri mu kifo namba 3 erina kubera I', 'Ennyukuta eri mu kifo namba 4 erina kubera D']} | ${'AUDIO'.split('')} | ${'LOIDL'.split('')} | ${'VOIDS'}
      ${[]}                                                                                                                                               | ${'LOIDS'.split('')} | ${'DIODE'.split('')} | ${'VOIDS'}
      ${['Ennyukuta eri mu kifo namba 2 erina kubera A', 'Ennyukuta eri mu kifo namba 3 erina kubera D', 'Ennyukuta eri mu kifo namba 4 erina kubera I']} | ${'GLYPH'.split('')} | ${'RADII'.split('')} | ${'WADIS'}
      ${[]}                                                                                                                                               | ${'DINER'.split('')} | ${'DIVER'.split('')} | ${'DIRER'}
      ${['Ennyukuta eri mu kifo namba 4 erina kubera E', 'L erina okukozesebwa mu lunyiriri luno']}                                                       | ${'AUDIO'.split('')} | ${'LOVES'.split('')} | ${'GLEEK'}
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
