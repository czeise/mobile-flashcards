import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import AddCard from './components/AddCard';
import reducer from './reducers/index';

function FlashcardsStatusBar() {
  return <View style={{ height: Constants.statusBarHeight }}><StatusBar /></View>;
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
}, {
  navigationOptions: {
    header: null
  }
});

const Navigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck
  },
  Quiz: {
    screen: Quiz
  },
  AddCard: {
    screen: AddCard
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <FlashcardsStatusBar />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
