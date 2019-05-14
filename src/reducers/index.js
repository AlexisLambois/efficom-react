import { combineReducers } from 'redux'
import pokemons from './pokemons'
import users from './user.reducer'
import authentication from './auth.reducer'
import alert from './alert.reducer'

export default combineReducers({
  pokemons,
  users,
  authentication,
  alert
})
