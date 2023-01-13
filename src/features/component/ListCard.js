import {pokemonUrlDetail} from "../document/documentSlice";
import {useDispatch} from "react-redux";
import React from "react";
import {FcBinoculars} from "react-icons/fc";
import {IconButton,Card,CardMedia,Box,CardContent,Typography} from "@material-ui/core";
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

export const ListCard = ({pokemon}) => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const handleDetail = (pokemon) => {
        if (pokemon != null){
            dispatch(
                pokemonUrlDetail({
                    pokemonUrl:pokemon
                })
            )
        }
    };

    const image = (urlImage) => {
        let image = urlImage.split('/');
        let imagePokemon = image[6];
        return imagePokemon
    };

    return(
        <Card className={classes.root}>
            <Box display={"flex"} justifyContent={"center"}>
                <CardMedia
                    className={classes.media}
                    image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ image(pokemon.url) +".png"}
                    title={"Image pokemon"}/>
            </Box>
            <CardContent>
                <PokemonNameComponent name={pokemon.name} type={"list"}/>
                <Box display={"flex"} justifyContent={"center"} flexDirection={"row"}>
                    <IconButton onClick={() => handleDetail(pokemon.url)}>
                        <FcBinoculars className={classes.iconButton}/>
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    )
};
