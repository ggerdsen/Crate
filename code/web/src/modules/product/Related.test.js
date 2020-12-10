// Testing
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
import { slug } from '../../setup/helpers';
import { Provider } from 'react-redux'
//Component
import Related from './Related'

let store = {
    subscribe: () => {
        return 'Hi'
    },
    getState: () => {
        return 'Hi'
    },
    dispatch: () => {
        return 'Hi'
    },
}

describe('DOM', () => {
    it('should render', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Related productId={1} productsRelated={
                        {
                            isLoading: false,
                            error: null,
                            list: null,
                            productId: 7
                        }
                    }/>
                </Provider>
            </BrowserRouter>
        );
    expect(screen.getByText('Christopher')).toBeInTheDocument();
    })
})