import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import PokemonCard from "../../components/PokemonCard";

function Pokemons() {
  const { pokemons } = useContext(Context);

  return (
    <section className="h-screen w-full p-[30px] pb-10 overflow-y-auto">
      <div className="flex flex-wrap  items-start justify-start gap-5">
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
      </div>
    </section>
  );
}

export default Pokemons;
