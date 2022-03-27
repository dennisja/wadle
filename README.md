# Wadle

Based on [wordle](https://www.powerlanguage.co.uk/wordle/)

## Learning Goals

- [x] Try out SVG sprites for loading SVG Icons
- [x] Try out theme-ui
- [x] Try implementing a toast without react context
- [ ] PWA
- ~[ ] Cypress => Will experiment with this in another project~

## Translations

All translations are currently found in the [translations folder](src/utils/translations/).

> All the translations are currently included in the JS bundle which means they will all be downloaded by a user regardless of the selected language. This is okay for now given that lazy loading them just saves a user about 5kbs of data. On the upside though all the relevant code will be available and the user won't need to fetch anything else when they change a language

### Adding a new ui translation

When you introduce a key value pair in any translations file. You have to do the same for other languages and typescript enforces that all the language files are in sync. If you are not sure about what the text translates to in another language. Just use the english translations.

> Currently only Luganda and English have translations but other languages are still using English translations given that I have no Idea about those languages. [The Luganda languages are also not accurate](https://twitter.com/dennisjjagwe/status/1506036966898520070), if you can volunteer to update them the better.

### Editing translations

If you find an inaccurate translation or one that can be improved. Please edit the relevant [language file](src/utils/translations/) and open a pull request.

## Words

All words available when playing can be found in the [words folder](src/utils/words/).

> As of now, all words are part of the JS bundle regardless of the selected language. Lazy loading words based on the language isn't that beneficial currently given it only saves a user less than 10kbs. Loading them all means we don't have to fetch an unavailable word list when the language changes

### Adding a new word

You can add a word by updating the good or bad word list of the language to which the word belongs

The words are split into good and bad words to make the game safe for all players. If you find a word in the good words list that might be offensive and considered nasty/obscene in a particular language. Please move it to the bad words list and create a pull request.

A word cannot be in both the good words and bad words list,it should only be in one of them.

> For easy identification of words. They should be added in alphabetical order

### Word sources

- Most of the [Luganda words](src/utils/words/luganda/) were obtained by scrapping Luganda news sites and some from the [sunbird ai language data set](https://github.com/SunbirdAI/ug-language-parallel-text-dataset)
- All [acholi](src/utils/words/acholi/), [ateso](src/utils/words/ateso/), [runyankore](src/utils/words/runyankore/) and [lugbara](src/utils/words/lugbara/) words were obtained from [the sunbird ai language data set](https://github.com/SunbirdAI/ug-language-parallel-text-dataset)
- The scripts to get these words are not included

> Since most of these words were obtained programatically, there is a a high chance that there are some words that don't belong to those languages or are just names of people. If you find any of them please make a PR to remove them.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
