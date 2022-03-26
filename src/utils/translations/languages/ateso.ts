import type { UIText } from './english';

const UI_TEXT: UIText = {
  actionBar: {
    pageTitle: {
      name: 'Wadle',
      click: {
        toastMessage: ['You like clicking things 😂'],
        toastTitle: 'Look at you',
      },
    },
  },

  app: { playAgain: 'Play Again', gameOver: 'Game Over' },

  board: {
    // translations for row
    revelations: {
      correct: { prefix: 'The letter at position', postfix: 'should be' },
      present: { postfix: 'should be used in the current word' },
    },
  },

  gameOver: {
    answerPrefix: 'The answer was',
    messages: {
      gameLost: ['Almost got it!!!', 'Nice try!!!', 'Good luck next time!!!'],
      gameWon: {
        1: ['Sensational!!!', 'Outstanding!!!', 'Fantastic!!!'],
        2: ['Hats off!!!', 'Tremendous!!!', 'Way to go!!!'],
        3: ['What a game!!!', 'You did it!!!', 'You rock!!!'],
        4: ['Respect!!!', 'Kudos!!!', 'You rule!!!'],
        5: ['Good show!!!', 'Well deserved!!!', 'Nice one!!!'],
        6: ['Pheeew!!!', 'Pat on the back!!!', 'Good one mate!!!'],
      } as Record<number, string[]>,
    },
    playAgain: 'Play Again',
  },

  guessDistribution: {
    title: 'Guess Distribution',
  },

  instructions: {
    title: 'Instructions',
    instructions: [
      'Guess the word in six tries.',
      'Each guess is a 5 letter word. Press enter to submit.',
      'After every guess, the tiles color will change to show how close you are to the guess',
    ],
    examples: {
      title: 'Examples',
      correct: {
        title: 'Correct',
        description: {
          prefix: 'The letter',
          highlight: 'W',
          postfix: 'is in the word and in the correct position',
        },
      },

      present: {
        title: 'Present',
        description: {
          prefix: 'The letter',
          highlight: 'A',
          postfix: 'is in the word but in the wrong position',
        },
      },

      absent: {
        title: 'Absent',
        description: {
          prefix: 'The letter',
          highlight: 'D',
          postfix: 'is not in the word',
        },
      },

      wrongWord: {
        title: 'Wrong word',
        description: {
          prefix: 'The word',
          highlight: 'WADLE',
          postfix: 'does not exist in our word list',
        },
      },
    },
  },
  settings: {
    modalTitle: 'Settings',
    hardMode: {
      title: 'Hard mode',
      description: 'All revelations in the previous guesses must be used',
    },
    contact: {
      title: 'Contact',
      link: { name: 'Twitter' },
    },
    contribute: { title: 'Contribute' },
    darkMode: { title: 'Dark Mode' },
  },

  shareButton: {
    copySuccess: 'Copied data to clipboard.',
    copyOrShareFailure: 'Copying/Sharing text failed.',
    appName: 'WADLE',
    share: 'Share',
  },

  stats: {
    noGamesPlayedInfo: 'Play Some Games',
    modalTitle: 'Statistics',
  },

  statsSummary: {
    time: {
      title: 'Time',
      shortestGame: 'Shortest game',
      longestGame: 'Longest game',
      averageTime: 'Average Time',
      playTime: 'Playing Time',
    },
    streak: {
      title: 'Streak',
      currentStreak: 'Current Streak',
      maxStreak: 'Max Streak',
      totalPlayed: 'Played',
      winPercentage: 'Win %',
    },
  },

  useGame: {
    gameModeChange: {
      warning: 'You cannot change game mode in between a game.',
    },
    word: {
      bad: "That is a big word. It can't fit in our list.",
      absent: 'Not in word list',
    },
  },
};

export default UI_TEXT;
