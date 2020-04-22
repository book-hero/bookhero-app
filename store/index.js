import { createStore, combineReducers } from 'redux'
import { search } from './search/reducer'

export const store = createStore(combineReducers({ search }))
