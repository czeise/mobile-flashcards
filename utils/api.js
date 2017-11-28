import { AsyncStorage } from 'react-native';

import { DECK_STORAGE_KEY, formatResults } from './deckUtils';

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(formatResults);
}
