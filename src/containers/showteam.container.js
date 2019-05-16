import {connect} from 'react-redux'
import {getPokemons} from '../actions/pokemons.action'
import {getTeam} from '../actions/team.action'
import {putTeam} from '../actions/team.action'
import ShowTeam from '../ui/team/showTeam';

function mapStateToProps(state) {
  const { collection } = state.pokemons
  const { team } = state.team

  return {
    collection,
    team
  }
}

const mapDispatchToProps = {
  getPokemons,
  getTeam,
  putTeam
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTeam)
