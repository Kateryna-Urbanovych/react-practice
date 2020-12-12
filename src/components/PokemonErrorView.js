import errorImage from './error.jpg';

function PokemonErrorView({ message }) {
  return (
    <div>
      <img src={errorImage} alt="Грустный кот" width="200" />
      <p>{message}</p>
    </div>
  );
}

export default PokemonErrorView;
