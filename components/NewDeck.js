import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { saveNewDeck } from '../utils/api';
import { addDeck } from '../actions';

class NewDeck extends Component {
  state = {
    title: ''
  }

  submit = () => {
    const { title } = this.state;
    // Add deck to storage
    saveNewDeck(title);

    // Add deck to redux store
    this.props.addDeck(title);

    // Navigate to DeckDetail view of the newly created deck and reset the navigation stack so the
    // back button will take the user Home.
    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({ routeName: 'DeckDetail', params: { id: title } })
      ]
    });
    
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder='Deck Title'
          onChangeText={(title) => this.setState({ title: title })}
          value={this.state.title}
        />
        <Button
          style={{ height: 40 }}
          title='Create Deck'
          onPress={this.submit}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDeck: (deck) => dispatch(addDeck(deck))
  };
}

export default connect(null, mapDispatchToProps)(NewDeck);
