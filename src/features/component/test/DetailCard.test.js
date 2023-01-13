import React from 'react';
import { render, screen } from '@testing-library/react';
import {DetailCard} from "../DetailCard";
import {Provider} from "react-redux";
import store from "../../../app/store";
import pokemon from "./pokemon"
import pokemonSpecies from "./pokemon_species";
import pokemonLegendary from "./legendary_pokemon";
import pokemonSpeciesLegendary from "./legendary_pokemon_species";
import pokemonMystical from "./mystical_pokemon";
import pokemonSpeciesMystical from "./mystical_pokemon_species";


describe('DetailCard', () => {
    it('affiche le text quand la longueurs des props égale 0', () => {
        render(
            <Provider store={store}>
                <DetailCard pokemon={[]} pokemonSpecies={[]}/>
            </Provider>
        );

        expect(screen.getByText(/Cliquez sur les jumelles pour aperçevoir un Pokemon/)).toBeInTheDocument();
    });

    it('affiche la detail card quand le longueur des props != 0', () => {
        render(
            <Provider store={store}>
                <DetailCard pokemon={pokemon} pokemonSpecies={pokemonSpecies}/>
            </Provider>
        );

        expect(screen.getByText(/Ditto/)).toBeInTheDocument();
    })

    it('affiche l\'image de la honour ball pour un pokemon légendaire', () => {
        render(
            <Provider store={store}>
                <DetailCard pokemon={pokemonLegendary} pokemonSpecies={pokemonSpeciesLegendary}/>
            </Provider>
        );

        expect(screen.getByAltText("honour_ball")).toBeInTheDocument();
    })

    it('affiche l\'image de la master ball pour un pokemon mythique', () => {
        render(
            <Provider store={store}>
                <DetailCard pokemon={pokemonMystical} pokemonSpecies={pokemonSpeciesMystical}/>
            </Provider>
        );

        expect(screen.getByAltText("master_ball")).toBeInTheDocument();
    })
});
