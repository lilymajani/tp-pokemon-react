import React from "react";
import {DocumentListPokemon} from "./documentListPokemon";
import {DocumentDetails} from "./documentDetails";
import {Grid} from "@material-ui/core";


export const DocumentPokedex = () => {

    return(
        <Grid container>
            <Grid item xs={6}>
                <DocumentListPokemon/>
            </Grid>
            <Grid item xs={6}>
                <DocumentDetails/>
            </Grid>
        </Grid>
    )
};
