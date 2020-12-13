import { screen, waitFor } from '@testing-library/react';
import React from 'react'
import userEvent from '@testing-library/user-event';
import Profile from './Profile.js';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import { setUser, loginSetUserLocalStorageAndCookie } from './api/actions'
import { BrowserRouter, Switch } from 'react-router-dom'
import {store} from '../../setup/store.js'
import '@testing-library/jest-dom'
import { render } from '../../../test-utils.js';

const currentUser = {
  details: {
    name: "Elton",
    email: "elton@john.com"
  }
}

describe('User Profile', () => {

  describe('Unit Tests', () => {

    it('Should render a Profile', () => {
      render (
        <BrowserRouter>
          <Profile/>
        </BrowserRouter>, {initialState: { user: currentUser}}
      )
      expect(screen.getByText('My profile')).toBeInTheDocument();
      expect(screen.getByText('Subscriptions')).toBeInTheDocument();
      expect(screen.getByText('Logout')).toBeInTheDocument();
    })

    it('Should display the user information', () => {
      render (
        <BrowserRouter>
          <Profile/>
        </BrowserRouter>, {initialState: { user: currentUser}}
      )
      expect(screen.getByText('Elton')).toBeInTheDocument();
      expect(screen.getByText('elton@john.com')).toBeInTheDocument();
    })

  })

  describe('Integration Tests', () => {

    it('Should log out a user', () => {
      // store.dispatch(setUser(1, currentUser))
      render (
        <BrowserRouter>
          <Profile/>
        </BrowserRouter>, {initialState: { user: currentUser}}
      )
      expect(screen.getByText('My profile')).toBeInTheDocument();
      expect(screen.getByText('Subscriptions')).toBeInTheDocument();
      expect(screen.getByText('Logout')).toBeInTheDocument();
      setTimeout(() => {
        userEvent.click(screen.getByText('Logout'));
      }, 1);
      expect(screen.getByText('Elton')).toBeInTheDocument();
    })

  })
  
})


// It should render a user's Subscriptions
// It should log a user out of the App

// NEW TESTS:
// It should display a default image
// It should render an edit page
// It should render a delivery page
// It should render a purchased page
