import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {randomPokemon, selectRandomPokemon} from "./documentSlice";
import {Box,CardHeader,CardMedia,CardContent,Card,Container,CircularProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Back from "../../assets/fond.jpg"
import {PokemonNameComponent} from "../component/PokemonNameComponent";
import {PokemonHeightTypeWeightComponent} from "../component/PokemonHeightTypeWeightComponent";
import {PokemonStatsComponent} from "../component/PokemonStatsComponent";

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${Back})`,
        height: "100vh",
        backgroundPosition:"center",
        backgroundRepeat:"bo-repeat",
        backgroundSize:"cover",
        position:"relative",
        zIndex:-1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth:"100%"
    },
    media: {
        height: 300,
        width:300,
    },
});

export const DocumentHome = () => {

    const [index] = useState(Math.floor(Math.random() * (898)) + 1);
    const pokemonRandomSelected = useSelector(selectRandomPokemon);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(
            randomPokemon(index)
        )
    },[dispatch,index]);

    return(
        <Container className={classes.root} >
            {pokemonRandomSelected.length !== 0
                ?<Card>
                    <CardHeader
                        title={"N°" + pokemonRandomSelected.id}/>
                    <Box display={"flex"} justifyContent={"center"}>
                        <CardMedia
                            className={classes.media}
                            image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+pokemonRandomSelected.id+".png"}
                            title={"Image pokemon"}/>
                    </Box>
                    <CardContent>
                        <PokemonNameComponent name={pokemonRandomSelected.name}/>
                        <PokemonHeightTypeWeightComponent height={pokemonRandomSelected.height} types={pokemonRandomSelected.types} weight={pokemonRandomSelected.weight}/>
                        <PokemonStatsComponent stats={pokemonRandomSelected.stats}/>
                    </CardContent>
                </Card>
                :<CircularProgress/>}

        </Container>

    )
};
