import React from 'react';
import { render, screen } from '@testing-library/react';
import pokemonSpecies from "./pokemon_species"
import {PokemonEvolveFromComponent} from "../PokemonEvolveFromComponent";

describe('PokemonEvolveFromComponent', () => {
    it('Affiche texte de l\'évolution si evolve != null', () => {
        render(
            <PokemonEvolveFromComponent evolve={pokemonSpecies.evolves_from_species}/>
        );

        expect(screen.getByText(/Evolution of/)).toBeInTheDocument();
    })
});
