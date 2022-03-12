import { KeyboardEvent, useEffect } from 'react';
import { LETTERS, ROOT_ELEMENT } from '../../utils/constants';

const lettersStore = LETTERS.reduce<Record<string, boolean>>(
  (allLetters, currentLetter) => {
    allLetters[currentLetter] = true;
    return allLetters;
  },
  {}
);

const ENTER_KEY = 'Enter';

const DELETE_KEY = 'Backspace';

const rootElementIsInActive = () => ROOT_ELEMENT?.hasAttribute('aria-hidden');

type UseKeyBoardPressOptions = {
  onEnter: () => void;
  onDelete: () => void;
  onLetterPress: (letter: string) => void;
};

const useKeyBoardPress = ({
  onEnter,
  onDelete,
  onLetterPress,
}: UseKeyBoardPressOptions): void => {
  useEffect(() => {
    const handleKeyDown: EventListener = (e: Event) => {
      const event = e as unknown as KeyboardEvent;

      if (rootElementIsInActive()) return;

      event.preventDefault();
      if (event.key === ENTER_KEY) {
        onEnter();
        return;
      }

      if (event.key === DELETE_KEY) {
        onDelete();
        return;
      }

      const letter = event.key.toUpperCase();
      if (lettersStore[letter]) {
        onLetterPress(letter);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEnter, onDelete, onLetterPress]);
};

export default useKeyBoardPress;
