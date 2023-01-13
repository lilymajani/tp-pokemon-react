import React from "react";
import {pokemonFavSelected,removePokemonFavoris} from "../document/documentSlice";
import {useDispatch} from "react-redux";
import {FcDislike} from "react-icons/fc";
import {FcBinoculars} from "react-icons/fc";
import {Box,IconButton,CardMedia,CardContent,Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {PokemonNameComponent} from "./PokemonNameComponent";

const useStyles = makeStyles({
    root: {
        margin:10,
        width:200,
        height:240
    },
    media: {
        height: 120,
        width:120,
    },
    iconButton : {
        height:30,
        width:30
    }
});

export const FavoriteCard = ({pokemon}) => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const handleDetail = (pokemon) => {
        if (pokemon != null){
            dispatch(
                pokemonFavSelected({
                    pokemonFavSeleted:pokemon
                })
            )
        }
    };

    const handleFavoris = (pokemon) => {
        if (pokemon != null){
            dispatch(
                removePokemonFavoris({
                    pokemonFav:pokemon
                },)
            )
        }
    };

    return(
        <Card className={classes.root}>
            <Box display={"flex"} justifyContent={"center"}>
                <CardMedia
                    className={classes.media}
                    image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ pokemon.id +".png"}
                    title={"Image pokemon"}/>
            </Box>
            <CardContent>
                <PokemonNameComponent name={pokemon.name} type={'list'}/>
                <Box display={"flex"} justifyContent={"center"} flexDirection={"row"}>
                    <IconButton onClick={() => handleDetail(pokemon)}>
                        <FcBinoculars className={classes.iconButton}/>
                    </IconButton>
                    <IconButton onClick={() => handleFavoris(pokemon)}>
                        <FcDislike className={classes.iconButton}/>
                    </IconButton>
                </Box>
            </CardContent>
        </Card>


    )
};
