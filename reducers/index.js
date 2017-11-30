import { RECEIVE_DECKS, ADD_CARD } from '../actions';

function decks(state = {}, action) {
  const { type, decks, deck, card } = action;

  switch (type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...decks
      };
    case ADD_CARD:
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: [
            ...state[deck].questions,
            card
          ]
        }
      };
    default:
      return state;
  }
}

export default decks;
