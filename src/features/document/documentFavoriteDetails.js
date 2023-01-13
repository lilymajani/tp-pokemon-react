import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectPokemonFavSelected} from "./documentSlice";
import {DetailCard} from "../component/DetailCard";

export const DocumentFavoriteDetail = () => {

    const [oldUrl, setOldUrl] = useState('');
    const [pokemonSpeciesSelected, setPokemonSpeciesSelected] = useState('');
    const pokemonFav = useSelector(selectPokemonFavSelected);

    useEffect(() => {
        if (pokemonFav.length !== 0 && oldUrl !== pokemonFav.species.url){
            setOldUrl(pokemonFav.species.url);
            fetch(pokemonFav.species.url)
                .then(res => res.json())
                .then(result => {
                    setPokemonSpeciesSelected(result);
                })
        }
    },[pokemonFav, oldUrl]);

    return(
        <DetailCard pokemon={pokemonFav} pokemonSpecies={pokemonSpeciesSelected}/>
    )
};
