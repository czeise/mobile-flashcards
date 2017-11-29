import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';

import { addCardToDeck } from '../utils/api';

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: `Add card to ${navigation.state.params.id}` };
  };

  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { id } = this.props.navigation.state.params;
    addCardToDeck(id, this.state);
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder='Question'
          onChangeText={(question) => this.setState({ question: question })}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder='Answer'
          onChangeText={(answer) => this.setState({ answer: answer })}
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

export default AddCard;
