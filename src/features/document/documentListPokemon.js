import React,{useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {
    isFavButtonDisplay,
    typePokemonSearchHistory
} from "./documentSlice";
import Select from 'react-select';
import {IconButton, Box, Container} from "@material-ui/core";
import HistoryIcon from '@material-ui/icons/History';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {HistoriqueDialog} from "../component/HistoriqueDialog";
import {PokemonList} from "../component/PokemonList";
import {PaginationNumber} from "../component/PaginationNumber";
import {PaginationPreviousNext} from "../component/PaginationPreviousNext";


const options = [
    { value: '1', label: 'Normal' },
    { value: '2', label: 'Fighting' },
    { value: '3', label: 'Flying' },
    { value: '4', label: 'Poison' },
    { value: '5', label: 'Ground' },
    { value: '6', label: 'Rock' },
    { value: '7', label: 'Bug' },
    { value: '8', label: 'Ghost' },
    { value: '9', label: 'Steel' },
    { value: '10', label: 'Fire' },
    { value: '11', label: 'Water' },
    { value: '12', label: 'Grass' },
    { value: '13', label: 'Electric' },
    { value: '14', label: 'Psychic' },
    { value: '15', label: 'Ice' },
    { value: '16', label: 'Dragon' },
    { value: '17', label: 'Dark' },
    { value: '18', label: 'Fairy' }
];

export const DocumentListPokemon = () => {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsType, setPokemonsType] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [status,setStatus] = useState('idle');
    const [previousUrl, setPreviousUrl] = useState('');
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);
    const dispatch = useDispatch();


    useEffect(() => {
        doFetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');
        dispatch(
            isFavButtonDisplay({
                isFavoriteButtonDisplay:true
            },)
        )
    },[dispatch]);

    const doFetch = (su) => {
        fetch(su)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setPokemons(result.results);
                setNextUrl(result.next);
                setPreviousUrl(result.previous);
                setStatus('success');
                setPokemonsType([]);
            })
    };

    const handleType = e => {
        dispatch(
            typePokemonSearchHistory(e.label)
        );
        fetch('https://pokeapi.co/api/v2/type/'+e.value)
            .then(res => res.json())
            .then(result => {
                setPokemonsType(result.pokemon);
                setStatus('success')
            })
    };

    const handleClickOpenDialog = () => {
        setOpen(true)
    };

    const handleClickCloseDialog = () => {
        setOpen(false)
    };

    // Get current pokemons
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentTypePokemons = pokemonsType.slice(indexOfFirstPokemon,indexOfLastPokemon);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <Container>
            <Box display={"flex"} flexDirection={"row"}>
                <Select className={"mt-4 mb-4 col-md-8 col-offset-4"} onChange={handleType} options={options}/>
                <IconButton onClick={handleClickOpenDialog} color={"primary"} aria-label={"history"}>
                    <HistoryIcon/>
                </IconButton>
                {pokemonsType.length !== 0
                    ?<IconButton color={"primary"} aria-label={"arrow back"} onClick={() => doFetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')}>
                        <ArrowBackIcon/>
                    </IconButton>
                    :''
                }
                <HistoriqueDialog open={open} onClose={handleClickCloseDialog}/>
            </Box>

            {pokemonsType.length !== 0
                ? <PaginationNumber pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemonsType.length} paginate={paginate}/>
                : <PaginationPreviousNext nextUrl={nextUrl} previousUrl={previousUrl} handle={doFetch}/>
            }
            {pokemonsType.length !== 0
                ?<PokemonList pokemonList={currentTypePokemons} loading={status} typeList={'type'}/>
                :<PokemonList pokemonList={pokemons} loading={status} typeList={'all'}/>

            }
        </Container>
    )
};
