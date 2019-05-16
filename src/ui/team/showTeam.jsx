import React from "react";
import hardtack from 'hardtack';
import Table from 'react-bootstrap/Table';
import Search from '../../component/search/search';
import './showTeam.css';
import {connect} from 'react-redux';
import {teamService} from "../../services/team.service";

class ShowTeam extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            pokemonsIds: [],
            team: [],
            error: null
        }
    }

    componentDidMount() {
        // this.props.getPokemons().then(action => {
        //     if (action.error) {
        //         return this.setState({
        //             error: action.payload.message
        //         })
        //     }

        //     const searchString = hardtack.get('searchString')
        //     const { collection } = this.props

        //     if (!searchString) {
        //         return this.setState({
        //             pokemonsIds: Object.keys(collection)
        //         })
        //     }

        //     const pokemonsIds = Object.keys(collection).filter(pokemonId => {
        //         const pokemon = collection[pokemonId]

        //         return pokemon.name.includes(searchString)
        //     })

        //     this.setState({
        //         pokemonsIds,
        //         searchString
        //     })
        // });
        console.log(this.props);
        this.props.getTeam();

    }

    handleSearch = event => {
        const value = event.currentTarget.value.toLowerCase().trim()
        const {collection} = this.props

        hardtack.set('searchString', value, {
            maxAge: '31536000'
        })

        if (value === '') {
            return this.setState({
                pokemonsIds: Object.keys(collection),
                searchString: value
            })
        }

        const pokemonsIds = Object.keys(collection).filter(pokemonId => {
            const pokemon = collection[pokemonId]

            return pokemon.name.includes(value)
        })

        this.setState({
            pokemonsIds,
            searchString: value
        })
    }

    render() {
        const {searchString, pokemonsIds, error} = this.state
        const {collection, isFetched} = this.props

        const pokemons = pokemonsIds.map(pokemonId => {
            const pokemon = collection[pokemonId]

            return (
                <li className="pokemons__item_team" key={pokemon.id} onClick={() => console.log(pokemon.id)}>
                    <div className="d-flex flex-row name_poke">
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
                        <p> {pokemon.name}</p>
                    </div>
                </li>
            )
        })

        return (
            <div className="page page_team d-flex flex-row">
                <div>
                    {error && <div className="page__error">{error}</div>}
                    <div className="page__search">
                        <Search onChange={this.handleSearch} value={searchString}/>
                    </div>
                    {isFetched ? (
                        <p>Loading...</p>
                    ) : (
                        <ul className="pokemons_team">{pokemons}</ul>
                    )}
                </div>
                <div className="container pt-5">
                    <Table striped bordered hover variant="light">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {team} = state.team;
    return {
        team
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTeam: () => {
            teamService.getTeam().then((data) => {
                dispatch({
                    type: 'GET_TEAM_SUCCESS',
                    team: data
                })
            }).catch(() => {
                console.log('error');
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTeam);
