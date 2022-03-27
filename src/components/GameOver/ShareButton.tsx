import { VFC } from 'react';
import * as Sentry from '@sentry/react';
import { Language, LetterStatus } from '../../types';
import Button from '../../ui/Button';
import Icon from '../../ui/Icon';
import { getRowCellsStatus } from '../../utils/row';
import { getAnswer } from '../../utils/words';
import { createToast } from '../../ui/Toast';
import { t } from '../../utils/translations';

const ShareEmoji: Record<LetterStatus, string> = {
  [LetterStatus.ABSENT]: '⬛',
  [LetterStatus.PRESENT]: '🟨',
  [LetterStatus.CORRECT]: '🟩',
  [LetterStatus.UN_GUESSED]: '',
};

type ShareButtonProps = {
  board: readonly string[][];
  answerId: number;
  language: Language;
};

const toSharableEmojis = ({
  answerId,
  board,
  language,
}: ShareButtonProps): readonly string[][] => {
  const result: string[][] = [];
  const answer = getAnswer(answerId, language);

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
  let message = `${t('shareButton.appName')} ${boardStateEmojis.length}/6\n${
    window.location.href
  }\n\n`;

  boardStateEmojis.forEach((row) => {
    message = `${message}${row.join('').concat('\n')}`;
  });

  return message;
};

const ShareButton: VFC<ShareButtonProps> = ({ board, answerId, language }) => {
  const handleShare = async () => {
    const emojis = toSharableEmojis({ board, answerId, language });
    const message = formatMessage(emojis);
    try {
      if (navigator.canShare?.({ text: message })) {
        await navigator.share({ text: message });
      } else {
        await navigator.clipboard.writeText(message);
        createToast({
          messages: [t('shareButton.copySuccess')],
          type: 'success',
        });
      }
    } catch (error) {
      // AbortError is thrown when someone cancels a share
      if (error instanceof Error && error.name !== 'AbortError') {
        createToast({
          messages: [t('shareButton.copyOrShareFailure')],
          type: 'error',
        });
        Sentry.captureException(error);
      }
    }
  };

  return (
    <Button onClick={handleShare} size="medium" sx={{ ml: 's' }}>
      {t('shareButton.share')} <Icon iconName="share" />
    </Button>
  );
};

export default ShareButton;
