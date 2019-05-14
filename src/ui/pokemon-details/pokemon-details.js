import React from 'react'
import { Badge } from 'react-bootstrap';
import './pokemon-details.css';

export default class PokemonDetails extends React.Component {
    state = {
        pokemon: {},
        error: null
    }

    componentDidMount() {
        this.props.getPokemonById(this.props.match.params.id).then(action => {
            if (action.error) {
                return this.setState({
                    error: action.payload.message
                })
            }
            const { collection } = this.props

            this.setState({
                pokemon: collection
            })
        })
    }

    render() {
        const pokemon = this.state.pokemon;

        const types = pokemon.types && pokemon.types.map((type) => {
            return (<h5><Badge variant="secondary" className="m-2">{type}</Badge></h5>);
        })

        console.log();

        return (
            <div className="container">
                <div className="pokemon-details">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt=""/>
                    <div className="details">
                        <div className="header">
                            <h1 className="mr-2">{pokemon.name}</h1>
                            <div className="badges">
                                {types}
                            </div>
                        </div>
                        <div className="content">
                            <p>Taille : {pokemon.height} m</p>
                            <p>Poids : {pokemon.weight} kg</p>
                            <p>{pokemon.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
