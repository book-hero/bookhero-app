import { PERFORM_SEARCH } from './actions'

const initialState = {
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
            id: 1
          },
          {
            cover: null,
            author: 'Brandon Sanderson',
            title: 'Words of Radiance',
            id: 2
          },
          {
            cover: null,
            author: 'Brandon Sanderson',
            title: 'Oathbringer',
            id: 3
          }
        ]
      }
    default:
      return state
  }
}
