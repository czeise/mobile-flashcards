export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_CARD = 'ADD_CARD';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function addCardToDeck(deck, card) {
  return {
    type: ADD_CARD,
    deck, card
  };
}
