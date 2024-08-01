import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import PokemonCard from "../../components/PokemonCard";

function Pokemons() {
  const { pokemons } = useContext(Context);

  return (
    <section className="h-screen w-full flex items-start p-[30px] gap-5 pb-10 flex-wrap justify-start overflow-y-auto">
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
          isLiked={pokemon.isLiked}
          isSaved={pokemon.isSaved}
        />
      ))}
    </section>
  );
}

export default Pokemons;

