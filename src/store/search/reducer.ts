import { PERFORM_SEARCH } from './actions'
import { Book, BookList } from 'models/Book'

interface SearchState {
  searched: boolean
  searchResults: BookList
}

const initialState: SearchState = {
  searched: false,
  searchResults: []
}

export function search (state = initialState, action) {
  switch (action.type) {
    case PERFORM_SEARCH:
      return {
        ...state,
        searched: true,
        searchResults: [
          {
            cover: null,
            author: 'Brandon Sanderson',
            title: 'The Way of Kings',
            id: 1,
            reading: false
          },
          {
            cover: null,
            author: 'Brandon Sanderson',
            title: 'Words of Radiance',
            id: 2,
            reading: false
          },
          {
            cover: null,
            author: 'Brandon Sanderson',
            title: 'Oathbringer',
            id: 3,
            reading: false
          }
        ]
      }
    default:
      return state
  }
}
