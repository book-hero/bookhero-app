import * as R from 'ramda'
import {
  ADD_TO_BOOK_LIST,
  REMOVE_FROM_BOOK_LIST,
  STOP_READING,
  START_READING
} from './actions'

const initialState = []

function setBookReadingStatusTo (isReading, bookList, id) {
  return R.map(
    R.ifElse(R.propEq('id', id), R.assoc('reading', isReading), R.identity),
    bookList
  )
}

export function bookList (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BOOK_LIST:
      return [...state, action.book]
    case REMOVE_FROM_BOOK_LIST:
      return R.pipe(
        R.findIndex(book => book.id === action.book.id),
        R.remove(R.__, 1, state)
      )(action.book)
    case START_READING:
      return setBookReadingStatusTo(true, state, action.book.id)
    case STOP_READING:
      return setBookReadingStatusTo(false, state, action.book.id)
    default:
      return state
  }
}
