import { connect } from 'react-redux'
import {
  startReading,
  stopReading,
  removeFromBookList,
  finishReading
} from 'store/bookList/actions'
import { BookTile } from 'components/BookTile'
import { Book } from 'models/Book'
import { ConfirmationDialog } from 'components/Dialogs'

type MenuItem = {
  title: string
  show(book: Book): boolean
  action(book: Book): void
  confirmation?(callback: Function): void
}

function mapDispatchToProps (dispatch): { menuItems: MenuItem[] } {
  return {
    menuItems: [
      {
        title: 'Start Reading',
        show (book) {
          return !book.reading
        },
        action (book) {
          dispatch(startReading(book))
        }
      },
      {
        title: 'Finish Book',
        show (book) {
          return book.reading
        },
        action (book) {
          dispatch(finishReading(book))
        }
      },
      {
        title: 'Stop Reading',
        action (book) {
          openDialog(ConfirmationDialog(() => dispatch(stopReading(book))))
        },
        show (book) {
          return book.reading
        }
      },
      {
        title: 'Remove from Book List',
        action (book) {
          dispatch(removeFromBookList(book))
        },
        show (_book) {
          return true
        }
      }
    ]
  }
}

export const ActionableBookTile = connect(null, mapDispatchToProps)(BookTile)
