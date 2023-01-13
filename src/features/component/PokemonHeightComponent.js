import {Typography} from "@material-ui/core";
import React from "react";

export const PokemonHeightComponent = ({height}) => {

    const heightPokemon = (h) => {
        let height = h.toString();
        if (height.length === 1){
            height = "0,".concat(height);
            return height
        }else if (height.length === 2){
            height = height.split('').join(',');
            return height
        }else {
            height = height.substring(0,2)
            return height
        }
    };

    return(
        <Typography variant={"h5"} component={"h5"}>{heightPokemon(height)} m</Typography>
    )
};
