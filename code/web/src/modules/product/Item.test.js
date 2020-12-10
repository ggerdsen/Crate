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
    it('should render...', () => {
        render(
            <BrowserRouter>
                <Item product={
                    name = 'Chris'
                }/>
            </BrowserRouter>
        );
    // expect(true).toBe(true);    
    expect(screen.getByText('Hello')).toBeInTheDocument();
    });
})