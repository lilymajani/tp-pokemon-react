import pokemon_type from "../../pokemon_type";
import React from "react";

export const PokemonTypeComponent = ({types}) => {

    return(
        types.map(type => (
            <img src={pokemon_type[type.type.name]} alt={'type pokemon'} style={{width:50, height:50}}/>
        ))
    )
};
