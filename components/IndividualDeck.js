import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../utils/styles'

class IndividualDeck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck}`
  })

  render() {
  	const { deckTitle, questions, navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>{deckTitle}</Text>
        <Text style={styles.infoText}>
          {questions.length} cards
        </Text>
        <TouchableOpacity style={styles.androidSubmitBtn}
          onPress={() => navigation.navigate(
            'AddCard',
            {deckTitle}
        )}>
          <Text style={styles.submitBtnText}> Add Card </Text>
        </TouchableOpacity>
        {questions.length > 0 && 
          <TouchableOpacity style={styles.androidSubmitBtn}
            onPress={() => navigation.navigate(
            'Quiz',
            {deckTitle, questions}
          )}>
            <Text style={styles.submitBtnText}> Start Quiz </Text>
          </TouchableOpacity>
        }
      </View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { deck } = navigation.state.params

  return {
    deckTitle: state[deck] ? state[deck].title : '',
    questions: state[deck] ? state[deck].questions : [],
  }
}

export default connect(mapStateToProps)(IndividualDeck)
