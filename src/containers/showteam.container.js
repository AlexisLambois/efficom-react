import {connect} from 'react-redux'
import {getPokemons} from '../actions/pokemons.action'
import ShowTeam from '../ui/team/showTeam';

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
)(ShowTeam)
