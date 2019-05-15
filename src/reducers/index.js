import { combineReducers } from 'redux'
import pokemons from './pokemons.reducer'
import pokemon from './pokemon.reducer'
import users from './user.reducer'
import authentication from './auth.reducer'
import alert from './alert.reducer'
import registration from './register.reducer'
import team from './team.reducer'

export default combineReducers({
    pokemons,
    users,
    authentication,
    registration,
    alert, 
    pokemon,
    team
})
