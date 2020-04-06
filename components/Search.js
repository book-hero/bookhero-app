import * as React from 'react'
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Colors, Spacing } from '../ui'
import FAIcon from './FAIcon'


function SearchInput () {
  return <TextInput style={styles.input}></TextInput>
}

function SearchButton () {
  return (
    <TouchableOpacity style={styles.button}>
      <FAIcon icon="search" color="white"></FAIcon>
    </TouchableOpacity>
  )
}

export function Search () {
  return (
    <View style={styles.search}>
      <SearchInput></SearchInput>
      <SearchButton></SearchButton>
    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    margin: Spacing.small,
    marginBottom: Spacing.large,
    flexDirection: 'row'
  },
  input: {
    height: '100%',
    flex: 1,
    backgroundColor: Colors.white,
    borderColor: '#ccc',
    borderWidth: 1
  },
  button: {
    backgroundColor: Colors.tintColor,
    justifyContent: 'center',
    padding: Spacing.medium,
  }
})