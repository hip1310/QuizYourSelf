import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { getDecks, removeAllDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { styles } from '../utils/styles'
import { purple, white } from '../utils/colors'

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
        <List containerStyle={{margin: 10, padding: 10}}>
          {Object.keys(decks).map((deck,i) => (
            <ListItem
              containerStyle={styles.listItem}
              key={i}
              title={decks[deck].title}
              titleStyle={styles.listItemTitle}
              subtitle={`${decks[deck].questions.length} cards`}
              subtitleStyle={styles.infoText}
              onPress={() => navigation.navigate(
                'IndividualDeck',
                {deck: deck},
            )}/>
          ))}
        </List>
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
