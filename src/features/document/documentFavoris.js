import React from "react";
import {DocumentListFavoris} from "./documentListFavoris";
import {DocumentFavoriteDetail} from "./documentFavoriteDetails";
import {Grid} from "@material-ui/core";

export const DocumentFavoris = () => {

    return(
        <Grid container>
            <Grid item xs={6}>
                <DocumentListFavoris/>
            </Grid>
            <Grid item xs={6}>
                <DocumentFavoriteDetail/>
            </Grid>
        </Grid>
    )
};
