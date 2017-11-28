import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class DeckDetail extends Component {
  static navigationOptions = () => {
    // TODO: Use the actual decks name?
    return { title: 'Deck Detail' };
  }
  render() {

    return (
      <Text>DeckDetail</Text>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps)(DeckDetail);
