import * as R from 'ramda'
import { BookListAction } from './actions'
import { Book, BookList } from 'models/Book'

const initialState: BookList = []

function setBookReadingStatusTo (isReading, bookList: BookList, id) {
  return R.map(
    R.ifElse(R.propEq('id', id), R.assoc('reading', isReading), R.identity),
    bookList
  )
}

export function bookList (state = initialState, action: BookListAction) {
  switch (action.type) {
    case 'ADD_TO_BOOK_LIST':
      return [...state, action.book]
    case 'REMOVE_FROM_BOOK_LIST':
      return R.pipe(
        R.findIndex((book: Book) => book.id === action.book.id),
        index => R.remove(index, 1, state)
      )(state)
    case 'START_READING':
      return setBookReadingStatusTo(true, state, action.book.id)
    case 'STOP_READING':
      return setBookReadingStatusTo(false, state, action.book.id)
    case 'FINISH_READING':
      return setBookReadingStatusTo(false, state, action.book.id)
    default:
      return state
  }
}
