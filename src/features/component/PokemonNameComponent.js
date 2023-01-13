import React from "react";
import {Box, Typography} from "@material-ui/core";


export const PokemonNameComponent = ({name,type}) => {

    const strUcString = (name) => {
        return (name+'').charAt(0).toUpperCase()+name.substr(1);
    };

    return(
        <Box display={"flex"} justifyContent={"center"} >
            {type === 'detail'
                ?<Typography variant={"h4"} component={"h4"}>
                    {strUcString(name)}
                </Typography>
                :<Typography variant={"p"} component={"p"}>
                    {strUcString(name)}
                </Typography>
            }

        </Box>

    )

};
