import {connect} from 'react-redux'
import {getPokemonById} from '../actions/pokemons.action'
import PokemonDetails from './../ui/pokemon-details/pokemon-details';

function mapStateToProps(state) {
  const { collection } = state.pokemon

  return {
    collection
  }
}

const mapDispatchToProps = {
  getPokemonById
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetails)