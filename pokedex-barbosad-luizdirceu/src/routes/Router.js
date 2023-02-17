import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "../pages/details/DetailsPage";
import Home from "../pages/home/Home";
import PokedexPage from "../pages/pokedex/PokedexPage";

function Router (){

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokedex" element={<PokedexPage/>}/>
            <Route path="/pokemon/detalhes/:namePokemon" element={<DetailsPage/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default Router;