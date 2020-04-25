import { createStore, combineReducers } from 'redux'
import { search } from './search/reducer'
import { bookList } from './bookList/reducer'

export const store = createStore(combineReducers({ search, bookList }))
