import { VFC } from 'react';
import * as Sentry from '@sentry/react';
import { LetterStatus } from '../../types';
import Button from '../../ui/Button';
import Icon from '../../ui/Icon';
import { getRowCellsStatus } from '../../utils/row';
import { getAnswer } from '../../utils/word';
import { createToast } from '../../ui/Toast';

const ShareEmoji: Record<LetterStatus, string> = {
  [LetterStatus.ABSENT]: '⬛',
  [LetterStatus.PRESENT]: '🟨',
  [LetterStatus.CORRECT]: '🟩',
  [LetterStatus.UN_GUESSED]: '',
};

const UI_TEXT = {
  copySuccess: 'Copied data to clipboard.',
  copyOrShareFailure: 'Copying/Sharing text failed.',
  appName: 'WADLE',
  share: 'Share',
};

type ShareButtonProps = {
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
  let message = `${UI_TEXT.appName} ${boardStateEmojis.length}/6\n${window.location.href}\n\n`;

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
        createToast({ messages: [UI_TEXT.copySuccess], type: 'success' });
      }
    } catch (error) {
      // AbortError is thrown when someone cancels a share
      if (error instanceof Error && error.name !== 'AbortError') {
        createToast({ messages: [UI_TEXT.copyOrShareFailure], type: 'error' });
        Sentry.captureException(error);
      }
    }
  };

  return (
    <Button onClick={handleShare} size="medium" sx={{ ml: 's' }}>
      {UI_TEXT.share} <Icon iconName="share" />
    </Button>
  );
};

export default ShareButton;
