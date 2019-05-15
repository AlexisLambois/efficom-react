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

        return (
            // <div className="container">
            //     <div className="pokemon-details">
            //         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="" />
            //         <div className="details">
            //             <div className="header">
            //                 <h1 className="mr-2">{pokemon.name}</h1>
            //                 <div className="badges">
            //                     {types}
            //                 </div>
            //             </div>
            //             <div className="content">
            //                 <p>Taille : {pokemon.height} m</p>
            //                 <p>Poids : {pokemon.weight} kg</p>
            //                 <p>{pokemon.description}</p>
            //             </div>
            //         </div>
            //     </div>
            // </div>

            <div id="pokedex">
                <div class="sensor">
                    <button></button>
                </div>
                <div class="camera-display">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
                </div>
                <div class="divider"></div>
                <div class="stats-display">
                <div className="container">
                    <div className="row">
                        <h2>{pokemon.name}</h2>
                        <span className="badges">
                            {types}
                        </span>
                    </div>

                </div>
                    <p>Taille : {pokemon.height} m</p>
                    <p>Poids : {pokemon.weight} kg</p>
                    <p>{pokemon.description}</p>

                </div>
                <div class="botom-actions">
                    <div id="actions">
                        <button class="a"></button>
                    </div>
                    <div id="cross">
                        <button class="cross-button up"></button>
                        <button class="cross-button right"></button>
                        <button class="cross-button down"></button>
                        <button class="cross-button left"></button>
                        <div class="cross-button center"> </div>
                    </div>
                </div>
                <div class="input-pad"><input /></div>

                <div class="bottom-modes">

                    <button class="level-button"></button>
                    <button class="level-button"></button>
                    <button class="level-button"></button>
                    <button class="level-button"></button>

                    <button class="pokedex-mode black-button">Pokedex</button>
                    <button class="game-mode black-button">Game</button>

                </div>

            </div>
        )
    }
}
