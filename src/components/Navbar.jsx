import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/pokemonLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../context/Context";

function Navbar() {
  const { pokemons, setPokemons } = useContext(Context);
  return (
    <nav className="min-w-[20%] relative max-w-full h-screen overflow-y-auto bg-gradient-to-r from-violet-600 to-indigo-600">
      <Link to={"/"}>
        <img className="mx-auto" src={Logo} width={150} alt="" />
      </Link>

      <div className="flex flex-col text-white mt-10 font-medium">
        <NavLink
          to={"/"}
          className={
            "p-3 flex items-center hover:bg-white/20 hover:pl-10 duration-300 justify-between border-y border-white/20"
          }
        >
          All Pokemons
          <span className="w-5 h-5 flex items-center justify-center text-xs bg-white/40 rounded-full">
            {pokemons.length}
          </span>
        </NavLink>
        <NavLink
          to={"/saved-pokemons"}
          className={
            "p-3 flex items-center hover:bg-white/20 hover:pl-10 duration-300 justify-between border-y border-white/20"
          }
        >
          Saved pokemons{" "}
          <span className="w-5 h-5 flex items-center justify-center text-xs bg-white/40 rounded-full">
            {pokemons.filter((pokemon) => pokemon.isSaved).length}
          </span>
        </NavLink>
        <NavLink
          to={"/liked-pokemons"}
          className={
            "p-3 flex items-center hover:bg-white/20 hover:pl-10 duration-300 justify-between border-y border-white/20"
          }
        >
          Liked pokemons
          <span className="w-5 h-5 flex items-center justify-center text-xs bg-white/40 rounded-full">
          {pokemons.filter((pokemon) => pokemon.isLiked).length}
          </span>
        </NavLink>

        <div className="absolute bottom-0 w-full">
          <a
            href="https://t.me/IslomPardaboyev"
            className={
              "p-3 flex hover:bg-white/20 duration-300 hover:pl-10 items-center gap-4 border-y border-white/20"
            }
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-solid fa-user" />
            Hire Me
          </a>
          <a
            href="https://t.me/IslomPardaboyev"
            className={
              "p-3 flex hover:bg-white/20 duration-300 hover:pl-10 items-center gap-4 border-y border-white/20"
            }
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-solid fa-file-pen" />
            All Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
