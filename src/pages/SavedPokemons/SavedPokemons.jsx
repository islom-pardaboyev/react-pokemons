import React, { useContext } from "react";
import { Context } from "../../context/Context";
import PokemonCard from "../../components/PokemonCard";

function SavedPokemons() {
  const { pokemons } = useContext(Context);
  return (
    <section className="h-screen w-full flex items-start p-[30px] gap-5 pb-10 flex-wrap justify-start overflow-y-auto">
      {pokemons.filter((pok) => pok.isSaved).length ? (
        pokemons
          .filter((pok) => pok.isSaved)
          .map((pokemon, index) => (
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
          ))
      ) : (
        <h1 className="text-neutral-500 font-bold text-4xl w-full h-full flex items-center justify-center">
          Not Yet Saved Todo
        </h1>
      )}
    </section>
  );
}

export default SavedPokemons;
