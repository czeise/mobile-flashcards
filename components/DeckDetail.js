import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import Pluralize from 'pluralize';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: navigation.state.params.id };
  }

  render() {
    const { deck, navigation } = this.props;

    return (
      <View style={styles.mainView}>
        <View style={styles.title}>
          <Text style={{ fontSize: 40 }}>{deck.title}</Text>
          <Text style={{ fontSize: 30, color: 'gray' }}>
            {Pluralize('card', deck.questions.length, true)}
          </Text>
        </View>
        <Button
          onPress={() => navigation.navigate('AddCard', { id: navigation.state.params.id })}
          title='Add Card'
          style={styles.button}
        />
        <Button
          onPress={() => navigation.navigate('Quiz', { id: navigation.state.params.id })}
          title='Start Quiz' style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-around'
  },
  title: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
  button: {
    padding: 10
  }
});

function mapStateToProps(decks, props) {
  const deck = decks[props.navigation.state.params.id];
  return { deck };
}

export default connect(mapStateToProps)(DeckDetail);
