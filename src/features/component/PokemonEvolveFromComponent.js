import Typography from "@material-ui/core/Typography";
import React from "react";

export const PokemonEvolveFromComponent = ({evolve}) => {

    return(
        evolve !== null
            ? <Typography style={{marginTop:10}} variant={"h5"} component={"h5"}>Evolution of : {evolve.name}</Typography>
            : ''
    )
};
