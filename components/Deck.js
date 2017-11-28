import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Deck extends Component {
  render() {
    const { decks, id } = this.props;

    return (
      <View>
        <Text>Deck</Text>
        <Text>{JSON.stringify(decks[id])}</Text>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps, null)(Deck);
