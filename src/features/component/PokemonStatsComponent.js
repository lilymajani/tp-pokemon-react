import {Box,Typography,LinearProgress} from "@material-ui/core";
import React from "react";
import {withStyles} from "@material-ui/styles";

const CustomLinearProgress = withStyles((theme) =>({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: '#c9c9c9',
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#c2768f',
    },
}))(LinearProgress);

export const PokemonStatsComponent = ({stats}) => {

    return(
        stats.map(stat => (
                <Box style={{marginTop:10}}>
                    <Typography variant={"h6"} component={"h6"}>{stat.stat.name} - {stat.base_stat}</Typography>
                    <CustomLinearProgress variant={"determinate"} value={stat.base_stat}/>
                </Box>
        ))
    )
};
