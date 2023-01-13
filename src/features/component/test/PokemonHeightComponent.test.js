import React from 'react';
import { render, screen } from '@testing-library/react';
import pokemon from "./pokemon";
import {PokemonHeightComponent} from "../PokemonHeightComponent";

describe('PokemonHeightComponent', () => {
    it('Affiche texte de la taille du pokemon', () => {
        render(
            <PokemonHeightComponent height={pokemon.height}/>
        );

        expect(screen.getByText(/m/)).toBeInTheDocument();
    })
});
