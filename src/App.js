import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/PokemonInfo';

class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <ToastContainer autoClose={3000} />
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
      </div>
    );
  }
}

export default App;

// ПРИМЕР!!!  Основы HTTP-запросов в React - самый простой вариант)))
// state = {
//     pokemon: null,
//     loading: false,
//   };

//   componentDidMount() {
//     this.setState({ loading: true });
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(response => response.json())
//       .then(pokemon => this.setState({ pokemon }))
//       .finally(() => this.setState({ loading: false }));
//   }

//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         {this.state.loading && <h1>Загружаем...</h1>}
//         {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//       </div>
//     );
//   }
