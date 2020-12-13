import { screen, waitFor } from '@testing-library/react';
import React from 'react'
import userEvent from '@testing-library/user-event';
import Edit from './Edit.js';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import { setUser, loginSetUserLocalStorageAndCookie } from './api/actions'
import { BrowserRouter, Switch } from 'react-router-dom'
import {store} from '../../setup/store.js'
import '@testing-library/jest-dom'
import { render } from '../../../test-utils.js';
import Item from '../product/Item.js';

describe('Dom', () => {
    
    it('should render the inputs, buttons, and the icon', () => {
        render (
            <BrowserRouter>
              <Edit/>
            </BrowserRouter>
        )
    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByText('Edit Profile')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Shipping Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Picture')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    })

})