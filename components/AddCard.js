import React, { Component } from 'react';
import { TextInput, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

import { saveCardToDeck } from '../utils/api';
import { addCardToDeck } from '../actions';

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: `Add card to ${navigation.state.params.id}` };
  };

  state = {
    question: '',
    answer: '',
    addNotice: false
  }

  clearState = () => {
    this.setState({ question: '', answer: '' });
  }

  submit = () => {
    const { id } = this.props.navigation.state.params;
    const { question, answer } = this.state;
    const newCard = { question: question, answer: answer };
    saveCardToDeck(id, newCard);
    this.props.addCardToDeck(id, newCard);

    Alert.alert(
      'Card added!',
      "You can continue adding cards on this page if you'd like."
    );

    this.clearState();
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder='Question'
          onChangeText={(question) => this.setState({ question: question })}
          value={this.state.question}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder='Answer'
          onChangeText={(answer) => this.setState({ answer: answer })}
          value={this.state.answer}
        />
        <Button
          style={{ height: 40 }}
          title='Submit'
          onPress={this.submit}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCardToDeck: (deck, card) => dispatch(addCardToDeck(deck, card))
  };
}

export default connect(null, mapDispatchToProps)(AddCard);
