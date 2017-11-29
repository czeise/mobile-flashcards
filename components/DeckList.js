import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';

import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions';
import Deck from './Deck';

class DeckList extends Component {
  state = {
    decksLoaded: false
  }

  componentDidMount() {
    const { receiveDecks } = this.props;
    fetchDecks()
      .then((decks) => receiveDecks(JSON.parse(decks)))
      .then(() => this.setState(() => ({ decksLoaded: true })));
  }

  render() {
    const { decks, navigation } = this.props;
    const { decksLoaded } = this.state;

    if (decksLoaded === false) {
      return <AppLoading />;
    }

    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {Object.keys(decks).map((deck) => (
          <Deck key={deck} id={deck} navigation={navigation}/>
        ))}
      </ScrollView>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveDecks: (decks) => dispatch(receiveDecks(decks))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
