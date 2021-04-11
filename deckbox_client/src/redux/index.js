import { combineReducers } from 'redux'
import userReducer from './userReducer'
import deckBoxReducer from './deckBoxReducer'

export default combineReducers({user: userReducer, deckBoxes: deckBoxReducer})