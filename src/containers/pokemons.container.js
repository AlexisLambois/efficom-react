import {connect} from 'react-redux'
import {getPokemons} from '../actions/pokemons.action'
import ListPokemon from './../ui/list-pokemon/list-pokemon';

function mapStateToProps(state) {
  const { collection } = state.pokemons

  return {
    collection
  }
}

const mapDispatchToProps = {
  getPokemons
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPokemon)
