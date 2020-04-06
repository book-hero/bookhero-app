import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BookTileWithButton } from '../../components/BookTile'
import { Search } from '../../components/Search'
import FAIcon from '../../components/FAIcon'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Spacing } from '../../ui'


function EmptyResultList () {
  const searched = false
  const text = searched ? "Sorry, we didn't find anything for your search." : "Start searching for something new!"
  return (
    <View style={styles.empty}>
      <FAIcon icon="books" color={styles.emptyContent.color} size={50}></FAIcon>
      <Text style={styles.emptyContent}>{text}</Text>
    </View>
  )
}

export default function DiscoverScreen () {
  return (
    <View>
      <Search></Search>
      <EmptyResultList></EmptyResultList>
      {/* <BookTileWithButton author="Jim Jones" title="book by jim jones"></BookTileWithButton>
      <BookTileWithButton author="Jim Jones" title="book by jim jones"></BookTileWithButton>
      <BookTileWithButton author="Jim Jones" title="book by jim jones"></BookTileWithButton>
      <BookTileWithButton author="Jim Jones" title="book by jim jones"></BookTileWithButton>
      <BookTileWithButton author="Jim Jones" title="book by jim jones"></BookTileWithButton> */}
    </View>
  )
}

const styles = StyleSheet.create({
  empty: {
    // flex: 1,
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContent: {
    color: '#aaa',
    fontSize: 20,
    margin: Spacing.medium,
    textAlign: 'center'
  }
})