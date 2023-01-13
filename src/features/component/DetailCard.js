import React from "react";
import {booleanIsFavoriteButtonDisplay} from "../document/documentSlice";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/styles";
import {Card,CardMedia,CardContent,CardHeader,CardActions,Box,Container,Typography} from '@material-ui/core';
import honour_ball from "../../assets/honour_ball.png"
import master_ball from "../../assets/master_ball.png"
import {PokemonNameComponent} from "./PokemonNameComponent";
import {PokemonHeightTypeWeightComponent} from "./PokemonHeightTypeWeightComponent";
import {PokemonStatsComponent} from "./PokemonStatsComponent";
import {PokemonEvolveFromComponent} from "./PokemonEvolveFromComponent";
import {PokemonFlavorTextComponent} from "./PokemonFlavorTextComponent";
import {FavoriteIconComponent} from "./FavoriteIconComponent";

const useStyles = makeStyles({
    root: {
        marginTop:20
    },
    media: {
        height: 200,
        width:200,
    },
    pokeball: {
        width:50,
        height:50,
        marginTop: 10
    },
});

export const DetailCard = ({pokemon, pokemonSpecies}) => {

    const isFavoriteButtonDisplay = useSelector(booleanIsFavoriteButtonDisplay);
    const classes = useStyles();

    return(
        <Container>
            {pokemon.length !== 0 && pokemonSpecies.length !== 0
            ?<Card className={classes.root}>
                <CardHeader
                title={"N°" + pokemon.id}/>
                <Box display={"flex"} justifyContent={"center"}>
                    <CardMedia
                    className={classes.media}
                    image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+pokemon.id+".png"}
                    title={"Image pokemon"}/>
                </Box>
                <CardContent>
                    <PokemonNameComponent name={pokemon.name} type={'detail'}/>
                    <PokemonHeightTypeWeightComponent height={pokemon.height} types={pokemon.types} weight={pokemon.weight}/>
                    <PokemonStatsComponent stats={pokemon.stats}/>
                    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                        <PokemonEvolveFromComponent evolve={pokemonSpecies.evolves_from_species}/>
                        <PokemonFlavorTextComponent flavor={pokemonSpecies.flavor_text_entries}/>
                        {pokemonSpecies.is_legendary === true
                            ? <img src={honour_ball} className={classes.pokeball} alt={"honour_ball"}/>
                            : ''
                        }
                        {pokemonSpecies.is_mythical === true
                            ? <img src={master_ball} className={classes.pokeball} alt={"master_ball"}/>
                            : ''
                        }
                    </Box>
                </CardContent>
                <CardActions disableSpacing>
                    {isFavoriteButtonDisplay === true
                        ? <FavoriteIconComponent pokemon={pokemon}/>
                        : ''
                    }
                </CardActions>
                </Card>
                :<Typography variant={"h5"} component={"h5"}>Cliquez sur les jumelles pour aperçevoir un Pokemon</Typography>
            }
        </Container>
    )
};
