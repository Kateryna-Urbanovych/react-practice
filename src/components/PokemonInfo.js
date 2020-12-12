import { Component } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../servises/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      pokemonAPI
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }
  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Введите имя покемона</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

export default PokemonInfo;

// class PokemonInfo extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.pokemonName;
//     const nextName = this.props.pokemonName;
//     if (prevName !== nextName) {
//       //   console.log('Покемон изменился');

//       this.setState({ loading: true, pokemon: null });

//       fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           return Promise.reject(new Error(`Нет покемона с именем ${nextName}`));
//         })
//         .then(pokemon => this.setState({ pokemon }))
//         .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }
//   render() {
//     const { pokemon, loading, error } = this.state;
//     const { pokemonName } = this.props;
//     return (
//       <div>
//         {error && <h2>{error.message}</h2>}
//         {loading && <div>Загружаем...</div>}
//         {!pokemonName && <div>Введите имя покемона</div>}
//         {pokemon && (
//           <div>
//             <p>{pokemon.name}</p>
//             <img
//               src={pokemon.sprites.other['official-artwork'].front_default}
//               alt={pokemon.name}
//               width="200"
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }
