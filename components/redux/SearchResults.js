import { connect } from 'react-redux'
import { ResultList } from '../../components/ResultList'

function mapStateToProps (state) {
  return {
    results: state.search.searchResults,
    emptyText: state.search.searched
      ? "Sorry, we didn't find anything for your search."
      : 'Start searching for something new!'
  }
}

export const SearchResults = connect(mapStateToProps)(ResultList)
