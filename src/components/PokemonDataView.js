function PokemonDataView({ pokemon: { name, sprites } }) {
  return (
    <div>
      <p>{name}</p>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width="200"
      />
    </div>
  );
}

export default PokemonDataView;
