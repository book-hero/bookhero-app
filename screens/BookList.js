import * as React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { BookTile } from '../components/BookTile'
import { H3 } from '../ui/typography'
import { Spacing } from '../ui'
import { ScreenView } from '../components/ScreenView'
import { BookListResults } from '../components/redux/BookListResults'

export default function BookListScreen () {
  return (
    <ScreenView>
      <BookListResults
        emptyText='Look for smoething new'
        displayResult={book => (
          <BookTile
            key={book.id}
            title={book.title}
            author={book.author}
          ></BookTile>
        )}
      ></BookListResults>
    </ScreenView>
  )
}

/*
      <ScrollView>
        <H3 style={styles.header}>Reading</H3>
        <BookTile title='Book Title One'></BookTile>
        <H3 style={styles.header}>Coming Up</H3>
        <BookTile
          title='A Long Book Title (or, in other words, trying to make the text break)'
          author='Billy Jones'
        ></BookTile>
        <BookTile
          title='Book Title Three'
          author='Frederick Germaine'
        ></BookTile>
      </ScrollView>
 */

const styles = StyleSheet.create({
  header: {
    margin: Spacing.small
  }
})
