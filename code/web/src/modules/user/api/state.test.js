import state from './state';
import { userInitialState } from './state';
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions';
import '@testing-library/jest-dom';

describe('state', () => {
    it('should return the initial state', () => {
        expect(state(undefined, {})).toEqual(userInitialState);
    })
    
    it('should set the user state', () => {
        const action = {
            type: SET_USER,
            user: 'Chris'
        }
        expect(state(undefined, action)).toEqual(
            {
                error: null,
                isLoading: false,
                isAuthenticated: true,
                details: 'Chris'
            }
        )
    })

    it('should complete a login request', () => {
        const action = {
            type: LOGIN_REQUEST,
            isLoading: false
        }
        expect(state(undefined, action)).toEqual(
            {
                error: null,
                isLoading: false,
                isAuthenticated: false,
                details: null
            }        
        )
    })

    it('should provide a login response', () => {
        const action = {
            type: LOGIN_RESPONSE,
            error: 'Login completed'
        }
        expect(state(undefined, action)).toEqual(
            {
                error: 'Login completed',
                isLoading: false,
                isAuthenticated: false,
                details: null
            }        
        )
    })

    it('should log the user out', () => {
        const action = {
            type: LOGOUT,
        }
        expect(state(undefined, action)).toEqual(userInitialState)
    })
})