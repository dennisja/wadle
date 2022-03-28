import type { UIText } from './english';

const UI_TEXT: UIText = {
  actionBar: {
    pageTitle: {
      name: 'Wadle',
      click: {
        toastMessage: ['Oyagala onyigiriza buli kimu 😂'],
        toastTitle: 'Leero gwe',
      },
    },
  },

  app: { playAgain: 'Ddamu ozanye', gameOver: 'Kawedemu!!!' },

  board: {
    // translations for row
    revelations: {
      correct: {
        prefix: 'Ennyukuta eri mu kifo namba',
        postfix: 'erina kubera',
      },
      present: { postfix: 'erina okukozesebwa mu lunyiriri luno' },
    },
  },

  gameOver: {
    answerPrefix: 'Ekigambo ekitufu kibadde',
    messages: {
      gameLost: ['Biganye!!!', 'Webale kugezako!!!', 'Byayanga!!!'],
      gameWon: {
        1: ['Wa Wa Wa!!!', 'Kyatabu!!!', 'Gwe Asinga!!!'],
        2: ['Nkugideko enkofiira!!!', 'Kyakabi!!!', 'Kyeko baaba!!!'],
        3: ['Oli watabu!!!', 'Okikoze muganda wange!!!', 'Teri akwenkana!!!'],
        4: ['Kyekyo jjaja', 'Nenkya bwotyo!!!', 'Gwe asinga mukinto kino!!!'],
        5: ['Webale kuzanya!!!', 'Webale butapowa!!!', 'Webale kulemerako!!!'],
        6: ['Pheeew!!!', 'Kulika omuzannyo!!!', 'Kata kikuleme!!!'],
      } as Record<number, string[]>,
    },
    playAgain: 'Ddamu ozanye',
  },

  guessDistribution: {
    title: 'Emirundi gyokozeseza okuteba',
  },

  instructions: {
    title: 'Endagiriro',
    instructions: [
      'Teeba ekigambo mu mikisa mukaaga.',
      'Buli kigambo kya nnyukuta taano. Womala ozitekamu ngonyiga Enter',
      'Buuli luteeba, kaala yo lunyiriri ejja kukyuka okulaga wa wotuuse',
    ],
    examples: {
      title: 'Endagiriro',
      correct: {
        title: 'Ennyukuta entufu',
        description: {
          prefix: 'Ennyukuta',
          highlight: 'W',
          postfix: 'mweri mu kigambo kyolina okuteba era eri mu kifo kitufu',
        },
      },

      present: {
        title: 'Ennyukuta mweri',
        description: {
          prefix: 'Ennyukuta',
          highlight: 'A',
          postfix: 'mweri mukigambo kyolina okuteba naye eri mu kifo kikyamu',
        },
      },

      absent: {
        title: 'Ennyukuta eteri mukigambo',
        description: {
          prefix: 'Ennyukuta',
          highlight: 'D',
          postfix: 'teri mu kigambo kyolina okuteba',
        },
      },

      wrongWord: {
        title: 'Ekigambo kyetutalina',
        description: {
          prefix: 'Ekigambo',
          highlight: 'WADLE',
          postfix: 'tekiri mu lukalala lwebigambo byetulina',
        },
      },
    },
  },
  settings: {
    modalTitle: 'Enteekateeka',
    hardMode: {
      title: 'Eddala Erizibu',
      description: 'Buli nnyukuta gyozudde munyiriri eziyise olina okugikozesa',
    },
    contact: {
      title: 'Yogera nange',
      link: { name: 'Twitter' },
    },
    contribute: { title: 'Tuyambeko' },
    darkMode: { title: 'Kozesa langi enzirugavu' },
    language: {
      title: 'Olulimi',
      note: 'Olulimi lwokozesa okuzannya',
      change: {
        gameInProgress: {
          title: 'Olulimi telukyuse',
          messages: ['Tosobola kukyusa lulimi ngomuzannyo gukyagenda mu maaso'],
        },
      },
    },
  },

  shareButton: {
    copySuccess: 'Obubaka bukopedwa. Olina okubupestinga okusobola okubugabana',
    copyOrShareFailure: 'Okukopa/okusindika obubaka kuganye',
    appName: 'WADLE',
    share: 'Sindika',
  },

  stats: {
    noGamesPlayedInfo: 'Zannya yo emizanyo',
    modalTitle: 'Embalirira',
  },

  statsSummary: {
    time: {
      title: 'Obudde bwomuzannyo',
      shortestGame: 'Ogusinga obumpi',
      longestGame: 'Ogusinga obuwanvu',
      averageTime: 'Average Time',
      playTime: 'Emizannyo gyona',
    },
    streak: {
      title: 'Ekisinde',
      currentStreak: 'Kyoli mukutambuza',
      maxStreak: 'Ekisinga obuwanvu',
      totalPlayed: 'Omuwendo gwemizanyo',
      winPercentage: '% gyowangudde',
    },
  },

  useGame: {
    gameModeChange: {
      warning:
        'Tosobola kukyusa level yomuzannyo ngolina omuzannyo ogugenda mu maaso.',
    },
    word: {
      bad: 'Ekyo ekigambo nga kinene mukama waffe',
      absent: 'Ekigambo tetukirina mulukalala lwaffe',
    },
  },
};

export default UI_TEXT;
