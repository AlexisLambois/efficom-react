import {connect} from 'react-redux'
// import {getPokemonById} from '../actions/pokemons.action'
// import PokemonDetails from './../ui/pokemon-details/pokemon-details';

function mapStateToProps(state) {
  const { collection } = state.pokemon

  return {
    collection
  }
}

const mapDispatchToProps = {
  getPokemonV2ById
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPokemonV2)