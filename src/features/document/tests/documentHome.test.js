import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../../app/store";
import React from "react";
import {DocumentHome} from "../documentHome";

describe('documentHome', () => {
    it('La card s\'affiche quand les données sont chargées ', async () => {
        render(
            <Provider store={store}>
                <DocumentHome/>
            </Provider>
        );

        const kg = await screen.findByText(/kg/);
        expect(kg).toBeInTheDocument();
    });
});
