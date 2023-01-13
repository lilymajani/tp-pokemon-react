import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import  {client} from '../../api/client';

const initialState = {
    homeStatus:'idle',
    listStatus:'idle',
    randomPokemon:'',
    pokemonUrl:'',
    pokemonFavSeleted:'',
    pokemonFav:[],
    searchTypeHistoric:[],
    isFavoriteButtonDisplay:false
};

export const randomPokemon = createAsyncThunk('pokemons/randomPokemon',
    async index =>{
        const response = await client.get('https://pokeapi.co/api/v2/pokemon/'+index);
        return response
    });

const documentSlice = createSlice({
    name:'pokemons',
    initialState,
    reducers:{
        pokemonUrlDetail(state,action){
            state.pokemonUrl = action.payload.pokemonUrl;
        },
        pokemonFavSelected(state,action){
            state.pokemonFavSeleted = action.payload.pokemonFavSeleted;
        },
        addPokemonFavoris(state,action){
            state.pokemonFav.push(action.payload.pokemonFav);
        },
        removePokemonFavoris(state,action){
            state.pokemonFav = state.pokemonFav.filter(pokemon => pokemon.id !== action.payload.pokemonFav.id);
        },
        typePokemonSearchHistory(state,action){
            state.searchTypeHistoric.push(action.payload);
            if (state.searchTypeHistoric.length === 10){
                state.searchTypeHistoric.shift();
            }
        },
        isFavButtonDisplay(state,action){
            state.isFavoriteButtonDisplay = action.payload.isFavoriteButtonDisplay
        }
    },
    extraReducers: {
        [randomPokemon.fulfilled]: (state,action) => {
            state.homeStatus = 'success';
            state.randomPokemon = action.payload
        },
    }
});

export const selectRandomPokemon = state => state.pokemons.randomPokemon;
export const selectHomeStatus = state => state.pokemons.homeStatus;
export const selectPokemonFavoris = state => state.pokemons.pokemonFav;
export const selectTypeHistoric = state => state.pokemons.searchTypeHistoric;
export const selectUrlPokemon = state =>state.pokemons.pokemonUrl;
export const selectPokemonFavSelected = state => state.pokemons.pokemonFavSeleted;
export const booleanIsFavoriteButtonDisplay = state => state.pokemons.isFavoriteButtonDisplay;
export const {typePokemonSearchHistory , pokemonUrlDetail,
    pokemonFavSelected,isFavButtonDisplay,addPokemonFavoris,removePokemonFavoris} = documentSlice.actions;
export default documentSlice.reducer
