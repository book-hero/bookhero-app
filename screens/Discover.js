import * as React from 'react'
import { connect } from 'react-redux'
import { Search } from '../components/SearchBar'
import { ScreenView } from '../components/ScreenView'
import { SearchResults } from '../components/redux/SearchResults'
import { BookTileWithButton } from '../components/BookTile'
import { SearchResultTile } from '../components/redux/SearchResultTile'

export default function Discover ({ results }) {
  return (
    <ScreenView>
      <Search></Search>
      <SearchResults
        displayResult={book => <SearchResultTile key={book.id} book={book} />}
      ></SearchResults>
    </ScreenView>
  )
}
