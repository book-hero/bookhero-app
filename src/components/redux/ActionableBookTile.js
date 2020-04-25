import { connect } from 'react-redux'
import {
  startReading,
  stopReading,
  removeFromBookList
} from 'store/bookList/actions'
import { BookTile } from 'components/BookTile'

function mapDispatchToProps (dispatch) {
  return {
    menuItems: [
      {
        title: 'Start Reading',
        action (book) {
          dispatch(startReading(book))
        }
      },
      {
        title: 'Stop Reading',
        action (book) {
          dispatch(stopReading(book))
        }
      },
      {
        title: 'Remove from Book List',
        action (book) {
          dispatch(removeFromBookList(book))
        }
      }
    ]
  }
}

export const ActionableBookTile = connect(null, mapDispatchToProps)(BookTile)
