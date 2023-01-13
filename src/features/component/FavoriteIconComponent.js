import {useDispatch, useSelector} from "react-redux";
import {selectPokemonFavoris,addPokemonFavoris,removePokemonFavoris} from "../document/documentSlice";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {IconButton} from "@material-ui/core";
import React from "react";

export const FavoriteIconComponent = ({pokemon}) => {

    const pokemonsFavorisSelected = useSelector(selectPokemonFavoris);
    const dispatch = useDispatch();

    const handleFavoris = (pokemon) => {
        if (pokemon != null){
            if (pokemonsFavorisSelected.map(pokemonFav => pokemonFav.id === pokemon.id).includes(true)){
                dispatch(
                    removePokemonFavoris({
                        pokemonFav:pokemon
                    },)
                )
            }else{
                dispatch(
                    addPokemonFavoris({
                        pokemonFav:pokemon
                    },)
                )
            }
        }
    };

    const renderedIconFav = () => {
        var sourceIcon = <FavoriteBorderIcon/>;
        pokemonsFavorisSelected.map(pokemonFav => {
            if (pokemonFav.name === pokemon.name){
                sourceIcon = <FavoriteIcon/>
            }
            return sourceIcon
        });
        return sourceIcon
    };

    return(
        <IconButton  onClick={() => handleFavoris(pokemon)} color={"secondary"}>
            {renderedIconFav()}
        </IconButton>
    )

};
