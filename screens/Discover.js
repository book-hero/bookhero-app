import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BookTileWithButton } from '../components/BookTile'
import { Search } from '../components/SearchBar'
import FAIcon from '../components/FAIcon'
import { Spacing } from '../ui'
import { ScreenView } from '../components/ScreenView'
import { connect, dispatch } from 'react-redux'
import * as R from 'ramda'

function displaySearchResults (results) {
  return results
}

function mapStateToProps (state) {
  return {
    results: state.search.searchResults,
    searched: state.search.searched
  }
}

export default function Discover ({ results }) {
  return (
    <ScreenView>
      <Search></Search>
      <SearchResults></SearchResults>
    </ScreenView>
  )
}

function ResultsList ({ results, searched }) {
  return (
    <View style={{ flex: 1 }}>
      {results.length === 0 ? (
        <EmptyResultList searched={searched}></EmptyResultList>
      ) : (
        R.map(
          ({ author, title, id }) => (
            <BookTileWithButton key={id} author={author} title={title} />
          ),
          results
        )
      )}
    </View>
  )
}

const SearchResults = connect(mapStateToProps)(ResultsList)

function EmptyResultList ({ searched }) {
  const text = searched
    ? "Sorry, we didn't find anything for your search."
    : 'Start searching for something new!'
  return (
    <View style={styles.empty}>
      <FAIcon icon='books' color={styles.emptyContent.color} size={50}></FAIcon>
      <Text style={styles.emptyContent}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -Spacing.large
  },
  emptyContent: {
    color: '#aaa',
    fontSize: 20,
    margin: Spacing.medium,
    textAlign: 'center'
  }
})
