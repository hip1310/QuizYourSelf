import { StyleSheet } from 'react-native'
import { purple, white } from './colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: white,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  androidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 15,
    marginBottom: 15,
    height: 45,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  textInput: {
    height: 60,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallTextCenter: {
    fontSize: 17,
    paddingBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBtn: {
    backgroundColor: purple,
    marginLeft: 15,
  },
  listContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    paddingTop: 20,
  },
  listItem: {
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 15,
    padding: 10,
    backgroundColor: purple,
  },
  listItemTitle: {
    color: white,
    fontSize: 20,
    paddingTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemSubtitle: {
    color: white,
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  queAnsText: {
    color: white,
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
