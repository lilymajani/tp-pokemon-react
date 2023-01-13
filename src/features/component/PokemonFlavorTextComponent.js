import Typography from "@material-ui/core/Typography";
import React from "react";

export const PokemonFlavorTextComponent = ({flavor}) => {

    const flavorText = (f) => {
        const res = f.filter(fla => fla.language.name === 'en');
        const first = res.shift();
        return first.flavor_text
    };

    return(
        <Typography variant={"h6"} component={"h6"} style={{marginTop:10}}>
            {flavorText(flavor)}
        </Typography>
    )

};
