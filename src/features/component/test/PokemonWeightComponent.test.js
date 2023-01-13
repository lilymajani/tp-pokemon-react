import React from 'react';
import { render, screen } from '@testing-library/react';
import pokemon from "./pokemon";
import {PokemonWeightComponent} from "../PokemonWeightComponent";

describe('PokemonWeightComponent', () => {
    it('Affiche texte du poid du pokemon', () => {
        render(
            <PokemonWeightComponent weight={pokemon.weight}/>
        );

        expect(screen.getByText(/kg/)).toBeInTheDocument();
    })
});
