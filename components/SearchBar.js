import * as React from 'react'
import PropTypes from 'prop-types'
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Colors, Spacing } from '../ui'
import FAIcon from './FAIcon'
import { connect } from 'react-redux'
import { performSearch } from '../store/search/actions'

function SearchInput ({ onChange, onSubmit }) {
  return (
    <TextInput
      style={styles.input}
      onChange={onChange}
      onSubmitEditing={onSubmit}
    ></TextInput>
  )
}

function SearchButton ({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FAIcon icon='search' color='white'></FAIcon>
    </TouchableOpacity>
  )
}

function SearchBar ({ onSearch }) {
  const [searchTerm, updateSearchTerm] = React.useState('')
  return (
    <View style={styles.search}>
      <SearchInput
        onChange={e => updateSearchTerm(e.nativeEvent.text)}
        onSubmit={() => onSearch(searchTerm)}
      ></SearchInput>
      <SearchButton onPress={() => onSearch(searchTerm)}></SearchButton>
    </View>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export const Search = connect(null, mapDispatchToProps)(SearchBar)

function mapDispatchToProps (dispatch) {
  return {
    onSearch (term) {
      dispatch(performSearch(term))
    }
  }
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
    borderWidth: 1,
    fontSize: 24,
    paddingLeft: Spacing.small
  },
  button: {
    backgroundColor: Colors.tintColor,
    justifyContent: 'center',
    padding: Spacing.medium
  }
})
