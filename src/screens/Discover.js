import * as React from 'react'
import * as R from 'ramda'
import { Search } from '../components/SearchBar'
import { ScreenView } from '../components/ScreenView'
import { SearchResults } from '../components/redux/SearchResults'
import { SearchResultTile } from '../components/redux/SearchResultTile'

export default function Discover ({ results }) {
  return (
    <ScreenView>
      <Search></Search>
      <SearchResults
        display={results =>
          R.map(book => <SearchResultTile key={book.id} book={book} />, results)
        }
      ></SearchResults>
    </ScreenView>
  )
}
