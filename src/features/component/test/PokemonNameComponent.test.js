import React from 'react';
import { render, screen } from '@testing-library/react';
import pokemon from "./pokemon";
import {PokemonNameComponent} from "../PokemonNameComponent";

describe('PokemonNameComponent', () => {
    it('Affiche le nom du pokemon', () => {
        render(
            <PokemonNameComponent name={pokemon.name} type={'detail'}/>
        );

        expect(screen.getByText(/Ditto/)).toBeInTheDocument();
    })
});
