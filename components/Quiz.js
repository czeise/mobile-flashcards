import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { clearLocalNotification, setLocalNotification } from '../utils/notification';

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: `${navigation.state.params.id} Quiz`};
  };

  state = {
    currentCard: 0,
    displayQuestion: true,
    quizComplete: false,
    correctCount: 0
  }

  incrementCard(correct) {
    const { currentCard, correctCount } = this.state;
    const { questions } = this.props.deck;
    const newCard = currentCard + 1;
    const newCount = correct ? correctCount + 1 : correctCount;

    if (newCard < questions.length) {
      this.setState({
        currentCard: newCard,
        displayQuestion: true,
        correctCount: newCount
      });
    } else {
      clearLocalNotification()
        .then(setLocalNotification);

      this.setState({
        quizComplete: true,
        displayQuestion: true,
        correctCount: newCount
      });
    }
  }

  renderQuestion() {
    const { currentCard } = this.state;
    const question = this.props.deck.questions[currentCard];

    return (
      <View>
        <Text>{question.question}</Text>
        <Button
          style={{ height: 40 }}
          title='Answer'
          onPress={() => this.setState({ displayQuestion: false })}
        />
      </View>
    );
  }

  renderAnswer() {
    const { currentCard } = this.state;
    const question = this.props.deck.questions[currentCard];

    return (
      <View>
        <Text>{question.answer}</Text>
        <Button
          style={{ height: 40 }}
          title='Question'
          onPress={() => this.setState({ displayQuestion: true })}
        />
      </View>
    );
  }

  renderQuiz() {
    const { currentCard, displayQuestion } = this.state;
    const { questions } = this.props.deck;

    return (
      <View>
        <Text>{currentCard + 1}/{questions.length}</Text>
        {displayQuestion ? this.renderQuestion() : this.renderAnswer()}
        <Button
          style={{ height: 40, backgroundColor: 'green' }}
          title='Correct'
          onPress={() => this.incrementCard(true)}
        />
        <Button
          style={{ height: 40, backgroundColor: 'red' }}
          title='Incorrect'
          onPress={() => this.incrementCard(false)}
        />
      </View>
    );
  }

  restartQuiz() {
    this.setState({
      currentCard: 0,
      displayQuestion: true,
      quizComplete: false,
      correctCount: 0
    });
  }

  renderQuizComplete() {
    const { correctCount } = this.state;
    const { questions } = this.props.deck;

    return (
      <View>
        <Text>You answered {correctCount} out of {questions.length} questions correctly!</Text>
        <Button
          style={{ height: 40 }}
          title='Restart Quiz'
          onPress={() => this.restartQuiz()}
        />
        <Button
          style={{ height: 40 }}
          title='Back to Deck'
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }

  render() {
    const { quizComplete } = this.state;
    const { questions } = this.props.deck;

    if (questions.length === 0) {
      return (
        <Text>
          There aren't any cards in this deck! Please add cards before starting a quiz.
        </Text>
      );
    }

    return (
      <View>
        {!quizComplete
          ? this.renderQuiz()
          : this.renderQuizComplete()
        }
      </View>
    );
  }
}

function mapStateToProps(decks, ownProps) {
  const deck = decks[ownProps.navigation.state.params.id];
  return { deck };
}

export default connect(mapStateToProps)(Quiz);
