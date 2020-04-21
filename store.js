import { createStore, combineReducers } from 'redux'
import { search } from './features/discover/reducer'

export const store = createStore(combineReducers({ search }))
