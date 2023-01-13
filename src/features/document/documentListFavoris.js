import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectPokemonFavoris,isFavButtonDisplay} from "./documentSlice";
import {PokemonList} from "../component/PokemonList";
import {PaginationNumber} from "../component/PaginationNumber";
import {Box} from "@material-ui/core";

export const DocumentListFavoris = () => {

    const pokemonFavorisSelected = useSelector(selectPokemonFavoris);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);

    useEffect(() => {
        dispatch(
            isFavButtonDisplay({
                isFavoriteButtonDisplay:false
            },)
        )
    });

    // Get current pokemons
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentFavoritePokemons = pokemonFavorisSelected.slice(indexOfFirstPokemon,indexOfLastPokemon);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <Box>
            <PaginationNumber pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemonFavorisSelected.length} paginate={paginate}/>
            <PokemonList pokemonList={currentFavoritePokemons} loading={'success'} typeList={'favorite'}/>
        </Box>
    )
};
