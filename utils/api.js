import { AsyncStorage } from 'react-native';

import { DECK_STORAGE_KEY, formatResults } from './deckUtils';

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(formatResults);
}

export function setInitialDecks(decks) {
  console.log(decks);
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
    .then((decks) => console.log(JSON.stringify(decks)));
}

export function addCardToDeck(deckTitle, card) {
  const newData = {
    [deckTitle]: {
      title: deckTitle,
      questions: [
        card
      ]
    }
  };

  console.log(newData);
}
