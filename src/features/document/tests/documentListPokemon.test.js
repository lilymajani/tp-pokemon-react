import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../../app/store";
import React from "react";
import {DocumentListPokemon} from "../documentListPokemon";
import userEvent from "@testing-library/user-event";

describe('documentListPokemon', () => {
    it('Selection d\'un type de pokemon ', async () => {
        render(
            <Provider store={store}>
                <DocumentListPokemon/>
            </Provider>
        );

        expect(screen.queryByText(/Close/)).toBeNull();
        await userEvent.click(screen.getByLabelText('history'));
        expect(screen.findByText(/Close/)).toBeTruthy();
    });
});
