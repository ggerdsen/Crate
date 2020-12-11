import { screen } from '@testing-library/react';
import React from 'react'
import userEvent from '@testing-library/user-event';
import Profile from '../Profile.js';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import { setUser, loginSetUserLocalStorageAndCookie } from '../api/actions'
import { BrowserRouter, Switch } from 'react-router-dom'
import {store} from '../../../setup/store.js'
import '@testing-library/jest-dom'
import { render } from '../../../../test-utils.js';

describe('User Profile', () => {
  describe('Unit Tests', () => {
    it('Should render a Profile', () => {
      const currentUser = {
        details: {
          name: "Elton",
          email: "elton@john.com"
        }
      }
      render (
        <BrowserRouter>
          <Profile/>
        </BrowserRouter>, {initialState: { user: {
          details: {
            name: "Elton",
            email: "elton@john.com"
          }
        }}}
      )
      const profileTitle = screen.getByText('My profile')
      const subscriptionsButton = screen.getByText('Subscriptions')
      const logoutButton = screen.getByText('Logout')
      expect(profileTitle).toBeInTheDocument();
      expect(subscriptionsButton).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    })
    it('Should display the user information', () => {
      const currentUser = {
        details: {
          name: "Elton",
          email: "elton@john.com"
        }
      }
      render (
        <BrowserRouter>
          <Profile/>
        </BrowserRouter>, {initialState: { user: {
          details: {
            name: "Elton",
            email: "elton@john.com"
          }
        }}}
      )
      const userName = screen.getByText('Elton')
      const userEmail = screen.getByText('elton@john.com')
      expect(userName).toBeInTheDocument();
      expect(userEmail).toBeInTheDocument();
    })
  })
  describe('Integration Tests', () => {
    it('Should log out a user', () => {
      const currentUser = {
        details: {
          name: "Elton",
          email: "elton@john.com"
        }
      }
      store.dispatch(setUser(1, currentUser))
      render (
        <BrowserRouter>
          <Profile/>
        </BrowserRouter>, {initialState: { user: {
          details: {
            name: "Elton",
            email: "elton@john.com"
          }
        }}}
      )
      expect(screen.getByText('My profile')).toBeInTheDocument();
      expect(screen.getByText('Subscriptions')).toBeInTheDocument();
      expect(screen.getByText('Logout')).toBeInTheDocument();
      setTimeout(() => {
        userEvent.click(screen.getByText('Logout'));
      }, 1000);
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
