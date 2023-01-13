import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectUrlPokemon} from "./documentSlice";
import {DetailCard} from "../component/DetailCard";


export const DocumentDetails = () => {

    const pokemonUrl = useSelector(selectUrlPokemon);
    const [pokemonSelected, setPokemonSelected] = useState('');
    const [pokemonSpeciesSelected, setPokemonSpeciesSelected] = useState('');
    const [oldUrl, setOldUrl] = useState('');
    const [oldSpeciesUrl, setOldSpeciesUrl] = useState('');

    useEffect(() => {
        if (oldUrl !== pokemonUrl){
            setOldUrl(pokemonUrl);
            fetch(pokemonUrl)
                .then(res => res.json())
                .then(result => {
                    setPokemonSelected(result);
                });
        }
        if (pokemonSelected.length !== 0 && oldSpeciesUrl !== pokemonSelected.species.url){
            setOldSpeciesUrl(pokemonSelected.species.url);
            fetch(pokemonSelected.species.url)
                .then(res => res.json())
                .then(result => {
                    setPokemonSpeciesSelected(result);
                })
        }
    },[pokemonUrl, oldUrl, pokemonSelected, oldSpeciesUrl]);

    return(
        <DetailCard pokemon={pokemonSelected} pokemonSpecies={pokemonSpeciesSelected}/>
    )
};
