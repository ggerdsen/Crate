import state from './state';
import { userInitialState } from './state';
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions';
import '@testing-library/jest-dom';
import Item from '../../product/Item';

describe('state', () => {
    it('should return the initial state', () => {
        expect(state(undefined, {})).toEqual(userInitialState);
    })
})