import React from 'react';
import {ListCard} from "./ListCard";
import {FavoriteCard} from "./FavoriteCard";
import {Box,CircularProgress} from "@material-ui/core";

export const PokemonList = ({pokemonList,loading,typeList}) => {

    if (loading === 'idle'){
        return <CircularProgress/>
    }

    return(
        <Box display={"flex"} flexWrap={"wrap"}>
            {pokemonList.map((pokemon) => {
                if (typeList === 'type'){
                    return <ListCard pokemon={pokemon.pokemon}/>
                }else if (typeList === 'all'){
                    return <ListCard pokemon={pokemon}/>
                }else if (typeList === 'favorite'){
                    return <FavoriteCard pokemon={pokemon}/>
                }
            })}
        </Box>

    )
};


/* const renderedPokemonType = pokemonsType.map(pokemon => (
        <ListCard pokemon={pokemon.pokemon}/>
        // <div className={"card"}>
        //     <div className={"card-body"} onClick={() => handleDetail(pokemon.pokemon.name)}>
        //         <h5 className={"card-title"}>{pokemon.pokemon.name}</h5>
        //     </div>
        // </div>
    ));*/
