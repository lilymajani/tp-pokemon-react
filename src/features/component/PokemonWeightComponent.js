import Typography from "@material-ui/core/Typography";
import React from "react";

export const PokemonWeightComponent = ({weight}) => {

    const weightPokemon = (w) => {
        let weight = w.toString();
        if (weight.length === 1){
            weight = "0,".concat(weight);
            return weight
        }else if (weight.length === 2){
            weight = weight.split('').join(',');
            return weight
        }else if (weight.length === 3){
            weight = weight.substring(0,2);
            return weight
        }else{
            weight = weight.substring(0,3);
            return weight
        }
    };

    return(
        <Typography variant={"h5"} component={"h5"}>{weightPokemon(weight)} kg</Typography>
    )

};
