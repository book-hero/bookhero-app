import * as React from 'react'
import * as R from 'ramda'
import { StyleSheet, View } from 'react-native'
import { BookTile } from 'components/BookTile'
import { Spacing } from 'ui'
import { ScreenView } from 'components/ScreenView'
import { BookListResults } from 'components/redux/BookListResults'
import { H3 } from 'ui/typography'
import { ActionableBookTile } from 'components/redux/ActionableBookTile'

export default function BookList () {
  return (
    <ScreenView>
      <BookListResults
        emptyText='Go find some new books to read!'
        display={results => <DisplayBooks results={results} />}
      ></BookListResults>
    </ScreenView>
  )
}

function DisplayBooks ({ results }) {
  return (
    <View>
      <H3 style={styles.header}>Currently Reading</H3>
      {listBooks(R.filter(R.propEq('reading', true), results))}
      <H3 style={styles.header}>Coming Up</H3>
      {listBooks(R.filter(R.propEq('reading', false), results))}
    </View>
  )
}

function listBooks (books) {
  return R.map(
    book => <ActionableBookTile key={book.id} book={book}></ActionableBookTile>,
    books
  )
}

const styles = StyleSheet.create({
  header: {
    margin: Spacing.small
  }
})
