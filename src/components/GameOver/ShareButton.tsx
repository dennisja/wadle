import { VFC } from 'react';
import * as Sentry from '@sentry/react';
import { LetterStatus } from '../../types';
import Button from '../../ui/Button';
import Icon from '../../ui/Icon';
import { getRowCellsStatus } from '../../utils/row';
import { getAnswer } from '../../utils/word';

const ShareEmoji: Record<LetterStatus, string> = {
  [LetterStatus.ABSENT]: '⬛',
  [LetterStatus.PRESENT]: '🟨',
  [LetterStatus.CORRECT]: '🟩',
  [LetterStatus.UN_GUESSED]: '',
};

export type ShareButtonProps = {
  board: readonly string[][];
  answerId: number;
};

const toSharableEmojis = ({
  answerId,
  board,
}: ShareButtonProps): readonly string[][] => {
  const result: string[][] = [];
  const answer = getAnswer(answerId);

  board.forEach((row) => {
    if (row.join('').trim().length !== 5) return;

    const rowCellsStatus = getRowCellsStatus({
      row,
      answer,
      isSubmitted: true,
    });

    result.push(rowCellsStatus.map((status) => ShareEmoji[status]));
  });

  return result;
};

const formatMessage = (boardStateEmojis: readonly string[][]): string => {
  let message = `WADLE ${boardStateEmojis.length}/6\n${window.location.href}\n\n`;

  boardStateEmojis.forEach((row) => {
    message = `${message}${row.join('').concat('\n')}`;
  });

  return message;
};

const ShareButton: VFC<ShareButtonProps> = ({ board, answerId }) => {
  const handleShare = async () => {
    const emojis = toSharableEmojis({ board, answerId });
    const message = formatMessage(emojis);
    try {
      if (navigator.canShare?.({ text: message })) {
        await navigator.share({ text: message });
      } else {
        await navigator.clipboard.writeText(message);
        // eslint-disable-next-line no-alert
        window.alert('Copied info to clipboard');
        // TODO (toast): add toast here
      }
    } catch (error) {
      // TODO (toast): add toast here
      // eslint-disable-next-line no-alert
      window.alert('Copying failed');
      Sentry.captureException(error);
    }
  };

  return (
    <Button onClick={handleShare} size="medium" sx={{ ml: 's' }}>
      Share <Icon iconName="share" />
    </Button>
  );
};

export default ShareButton;
