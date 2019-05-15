import React, { PureComponent } from 'react'
import {Link} from "react-router-dom";
import './card-pokemon.css';

class Pokemon extends PureComponent {
  render() {
    const { pokemon } = this.props

    return (
      <div className="pokemon card">

        <Link className="mr-2 ml-2" to={`/pokemon/${pokemon.id}`}>
          <button
            type="button"
            className="pokemon__sprite"
            style={{
              backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.id
                }.png`})`
            }}
          />
          <p className="card-footer pokemon__name">{pokemon.name}</p>
        </Link>

      </div>
    )
  }
}

export default Pokemon
