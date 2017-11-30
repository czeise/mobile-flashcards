export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';

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

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}
