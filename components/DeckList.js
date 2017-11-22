import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions';

class DeckList extends Component {
  componentDidMount() {
    fetchDecks()
      .then((decks) => receiveDecks(decks));
  }

  render() {
    return (
      <Text>DeckList</Text>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    receiveDecks: () => dispatch(receiveDecks())
  };
}

export default connect(null, mapDispatchToProps)(DeckList);
