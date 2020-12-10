// Testing
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
//Component
import Item from './Item'
import { slug } from '../../setup/helpers';

describe('DOM', () => {
    it('should render the name of the product', () => {
        render(
            <BrowserRouter>
                <Item product={
                    {
                        id: 1,
                        name: 'Christopher',
                        slug: 'The Christopher',
                        description: 'A good belt',
                        image: "/images/stock/belt-female.jpg",
                        createdAt: '1606856151187'
                    }
                }/>
            </BrowserRouter>
        );
    expect(screen.getByText('Christopher')).toBeInTheDocument();
    });

    it('should render the product description', () => {
        render(
            <BrowserRouter>
                <Item product={
                    {
                        id: 1,
                        name: 'Christopher',
                        slug: 'The Christopher',
                        description: 'A good belt',
                        image: "/images/stock/belt-female.jpg",
                        createdAt: '1606856151187'
                    }
                }/>
            </BrowserRouter>
        );
    expect(screen.getByText('A good belt')).toBeInTheDocument();
    });
    
})