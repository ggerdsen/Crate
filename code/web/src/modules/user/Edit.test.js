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

