import { connect } from 'react-redux'
import { ResultList } from '../ResultList'

function mapStateToProps (state) {
  return {
    results: state.bookList
  }
}

export const BookListResults = connect(mapStateToProps)(ResultList)
