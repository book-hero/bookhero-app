export const ADD_TO_BOOK_LIST = 'ADD_TO_BOOK_LIST'
export const START_READING = 'START_READING'
export const STOP_READING = 'STOP_READING'

export function addToBookList (book) {
  return {
    type: ADD_TO_BOOK_LIST,
    book
  }
}

export function startReading (book) {
  return {
    type: START_READING,
    book
  }
}

export function stopReading (book) {
  return {
    type: STOP_READING,
    book
  }
}
