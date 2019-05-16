import { connect } from 'react-redux'
import {getPokemonsV2} from '../actions/pokemons-v2.action'
import ListPokemonV2 from './../ui/list-pokemon-v2/list-pokemon-v2';

function mapStateToProps(state) {
    const { collection } = state.pokemon

    return {
        collection
    }
}

const mapDispatchToProps = {
    getPokemonsV2
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPokemonV2)