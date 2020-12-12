import { ImSpinner } from 'react-icons/im';
import pendingImage from './pending.png';
import PokemonDataView from './PokemonDataView';

function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
  };

  return (
    <div role="alert">
      <div>
        <ImSpinner size="32" className="icon-spin" />
        Загружаем...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}

export default PokemonPendingView;
