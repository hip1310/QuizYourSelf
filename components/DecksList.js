import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks, removeAllDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { styles } from '../utils/styles'

class DecksList extends Component {
  componentDidMount () {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
  }

  render() {
  	const { decks, navigation } = this.props

    return (
        <ScrollView style={{flex: 1}}>
          {Object.keys(decks).map((deck,i) => (
          	<TouchableOpacity key={i}
          	  onPress={() => navigation.navigate(
          	  	'IndividualDeck',
          	  	{deck: deck},
          	  )}>
          	  <Text style={styles.infoText}>
          	  	{decks[deck].title} 
  			  </Text>
          	</TouchableOpacity>
          ))}
        </ScrollView>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DecksList)
