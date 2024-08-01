import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import PokemonCard from "../../components/PokemonCard";

function Pokemons() {
  const { pokemons, setPokemons } = useContext(Context);

  return (
    <section className="h-screen flex items-start gap-5 pb-10 flex-wrap justify-between overflow-y-auto">
      {pokemons.map((pokemon, index) => (
        <PokemonCard
          key={index}
          id={pokemon.id}
          img={pokemon.img}
          egg={pokemon.egg}
          height={pokemon.height}
          name={pokemon.name}
          types={pokemon.type}
          width={pokemon.weight}
        />
      ))}
    </section>
  );
}

export default Pokemons;

