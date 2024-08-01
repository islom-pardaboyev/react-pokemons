import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Context } from "../context/Context";

function PokemonCard({ img, name, types, width, height, egg, id, isLiked, isSaved }) {
  const {likedFn, savedFn} = useContext(Context)
  return (
    <div className="min-w-[32%] max-w-full relative p-5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500">
      <span className="absolute top-1 right-1 bg-white/80 w-7 h-7 rounded-full flex items-center justify-center">
        {id}
      </span>
      <img
        src={img}
        className="rounded-xl mx-auto"
        width={150}
        height={150}
        alt=""
      />
      <div className="mt-3 rounded-md p-1 flex flex-col gap-3 bg-white">
        <h1 className="flex w-full items-center justify-between">
          Name: <strong>{name}</strong>
        </h1>
        <h1 className="flex w-full items-center justify-between">
          Types: <strong>{types.join(", ")}</strong>
        </h1>
        <h1 className="flex w-full items-center justify-between">
          Width: <strong>{width}</strong>
        </h1>
        <h1 className="flex w-full items-center justify-between">
          Height: <strong>{height}</strong>
        </h1>
        <h1 className="flex w-full items-center justify-between">
          Egg: <strong>{egg}</strong>
        </h1>
      </div>
      <div className="flex items-center justify-between mt-3">
        <FontAwesomeIcon onClick={() => likedFn(id)} className={`w-4 h-4 cursor-pointer flex items-center justify-center p-3 bg-white rounded-full ${isLiked ? "text-red-600" : ""}`} icon="fa-solid fa-heart" />
        <FontAwesomeIcon onClick={() => savedFn(id)} className={`w-4 h-4 cursor-pointer flex items-center justify-center p-3 bg-white rounded-full ${isSaved ? 'text-sky-500' : ""}`} icon="fa-solid fa-bookmark" />
      </div>
    </div>
  );
}

export default PokemonCard;
