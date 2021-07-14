import { Book } from 'models/Book'

export type BookListActionType =
  | 'ADD_TO_BOOK_LIST'
  | 'REMOVE_FROM_BOOK_LIST'
  | 'START_READING'
  | 'STOP_READING'
  | 'FINISH_READING'

export type BookListAction = {
  type: BookListActionType
  book: Book
}

export function addToBookList (book) {
  return {
    type: 'ADD_TO_BOOK_LIST',
    book
  }
}

export function removeFromBookList (book) {
  return {
    type: 'REMOVE_FROM_BOOK_LIST',
    book
  }
}

export function startReading (book) {
  return {
    type: 'START_READING',
    book
  }
}

export function stopReading (book) {
  return {
    type: 'STOP_READING',
    book
  }
}

export function finishReading (book) {
  return {
    type: 'FINISH_READING',
    book
  }
}
