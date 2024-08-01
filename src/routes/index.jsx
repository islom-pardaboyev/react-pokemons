import { Route, Routes } from "react-router-dom";
import {LikedPokemons, Pokemons, SavedPokemons} from '../pages'

function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Pokemons />} />
            <Route path="/saved-pokemons" element={<SavedPokemons />} />
            <Route path="/liked-pokemons" element={<LikedPokemons />} />
        </Routes>
    )
}

export default CustomRoutes