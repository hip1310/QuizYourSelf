import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../utils/styles'
import QueAns from './QueAns'
import {
  setLocalNotification,
  clearLocalNotification,
} from '../utils/notifications'

class Quiz extends Component {
  state = {
    currQue: 0,
    correctQues: 0,
    showResult: false,
  }

  setCorrect = (correct) => {
    let { currQue, correctQues } = this.state
    const { questions } = this.props.navigation.state.params
    currQue += 1
    correctQues = correct ? correctQues + 1 : correctQues

    if(currQue < questions.length) {
      this.setState({
        currQue: currQue,
        correctQues: correctQues,
      })
    }
    else{
      this.setState({
        correctQues: correctQues,
        showResult: true,
      })

      clearLocalNotification().then(setLocalNotification())
    }
  }

  render() {
    const { questions } = this.props.navigation.state.params
    const { navigation } = this.props
    const { currQue, correctQues, showResult } = this.state
    return (
      <View style={styles.container}>
        <Text>{currQue+1}/{questions.length}</Text>
        <QueAns card={questions[currQue]} />
        {showResult ?
          <View>
            <Text>Score: {correctQues}</Text>
            <TouchableOpacity style={styles.androidSubmitBtn}
              onPress={() => navigation.navigate(
                'Quiz',
                {questions}
            )}>
              <Text style={styles.submitBtnText}> Restart Quiz </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.androidSubmitBtn}
              onPress={() => navigation.goBack()}>
              <Text style={styles.submitBtnText}> Back to Deck </Text>
            </TouchableOpacity>
          </View>
          :
          <View>
            <TouchableOpacity style={styles.androidSubmitBtn}
              onPress={() => this.setCorrect(true)}
            >
              <Text style={styles.submitBtnText}> Correct </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.androidSubmitBtn}
              onPress={() => this.setCorrect(false)}>
              <Text style={styles.submitBtnText}> Incorrect </Text>
            </TouchableOpacity>
          </View> 
        }
      </View>
    )
  }
}

export default Quiz
