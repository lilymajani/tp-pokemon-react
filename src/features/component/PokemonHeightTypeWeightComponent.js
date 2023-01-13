import {PokemonHeightComponent} from "./PokemonHeightComponent";
import {PokemonTypeComponent} from "./PokemonTypeComponent";
import {PokemonWeightComponent} from "./PokemonWeightComponent";
import {Box} from "@material-ui/core";
import React from "react";

export const PokemonHeightTypeWeightComponent = ({height,types,weight}) => {

    return(
        <Box display={"flex"} justifyContent={"space-around"} flexDirection={"row"}>
            <PokemonHeightComponent height={height}/>
            <PokemonTypeComponent types={types}/>
            <PokemonWeightComponent weight={weight}/>
        </Box>
    )
};
